import React,{useState} from "react";
import "./Style.css";
import AddNote from "./AddNote";

const App = () => {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [noteArr,setNoteArr] =useState([]);
    const [search,setSearch] = useState('');
    const [c,setC] =useState(0);
    const insertNote = () =>{
      if(!title && !desc){
        alert("Enter the title and description.")
      }
        noteArr.push({id:c,title:title,desc:desc});
        setNoteArr(noteArr)
        console.log(noteArr);
        setDesc("")
        setTitle("")
        setC(c+1);
    }
  return (
    <>
   
    <div className="appArea">
      <h1>Notes📝</h1>
      <div className="inputArea">
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title Here"/>
        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Description Here"/>
        <button className="btn" onClick={insertNote} style={{backgroundColor:"rgb(92, 155, 180)"}}>Add Note</button>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="search your note"/>
      </div>
        <AddNote noteArr={noteArr} setNoteArr={setNoteArr} search={search}/>
    </div>
    </>
  );
};
export default App;

