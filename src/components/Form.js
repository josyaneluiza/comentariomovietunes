import React from 'react'

export default function Form ({title,settitle,desc,setDesc,notes,setNotes}) {
const inputHandler=(e)=> {
if(e.target.id==="title"){
    settitle(e.target.value)
}else{
setDesc(e.target.value)
}
}
const addNotesHandler=(e)=>{
e.preventDefault()
if(title!=="" && desc!==""){
    setNotes((note) => {
        return(
            [...note,{
                title:title,
                desc:desc,
                id:new Date().getTime()
            }]
    )
        }) 
    }
        settitle("");
       setDesc("");            
    }

  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
            <div className="col-md-10">
            <form style= {{border:"2px solid #ced4da",borderRadius:"10px",padding:"30px"}}>
  <div className="mb-3">
    <label for="title" className="form-label">Nome</label>
    <input type="text" className="form-control" id="title" placeholder="Digite seu nome" value={title} onChange={inputHandler}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Comentário</label>
    <textarea name="desc" id="desc" rows="3" className="form-control" placeholder="Digite seu comentário" value={desc} onChange={inputHandler}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>Adicionar comentário</button>
</form>
            </div>
        </div>
      </div>
    </>
  )
}
