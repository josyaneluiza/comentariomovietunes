import React, {useState} from 'react'
import Navabr from './components/Navbar';
import Form from './components/Form';
import Notes from './components/Notes';
import EditModal from './components/EditModal';

export default function App() {
const [title,settitle] = useState("") 
const [desc,setDesc] = useState("") 
const [notes,setNotes]=useState (getNotesFromLs)
const[editld,seteditld]=useState("")
localStorage.setItem("notes",JSON.stringify(notes))
  return (
    <>
    <EditModal editld={editld} notes={notes} setNotes={setNotes}/>
      <Navabr/>
      <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes}/>
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-10">
          <h1 className="mb-3">Comentários</h1>
          {
           notes.length===0? <div className="card mb-3">
  <div className="card-body">
    <h5 className="card-title">Mensagem</h5>
    <p className="card-text">nenhum comentário disponível para leitura</p>
  </div>
</div>:notes.map((element)=> {
  return(
    <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} seteditld={seteditld}/>
  )
})
}
        </div>
        </div>
      </div>
    </>
  )
  function getNotesFromLs(){
    const note=JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note
    }else{
      return[];
    }
  }
}
