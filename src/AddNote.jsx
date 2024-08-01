import React,{useState} from "react";

const AddNote = (props) => {
  const lst = props.noteArr;
  const removeNote = (id)=>{
    const newArr = lst.filter((item)=>{
        return item.id != id;
    })
    props.setNoteArr(newArr);
  }
  return (
    <div className="noteList">
      {lst && lst.map((item, index) => {
        let title = item.title.toLowerCase();
        if(title && title.includes(props.search.toLowerCase())){
        return (
          <div className="noteArea" key={index}>
            <h2>{item.title}</h2>
            <h3>{item.desc}</h3>
            <button className="btn" onClick={()=>removeNote(item.id)}>Remove</button>
          </div>
        );
        }
      })}
    </div>
  );
};
export default AddNote;
