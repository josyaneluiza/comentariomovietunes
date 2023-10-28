import React from 'react'

export default function EditModal({editld,notes,setNotes}) {
    const updateHandler=()=>{
       const updateNotes=notes.map((elem)=>{
if(editld===elem.id){
    return({
        ...elem,title:document.getElementById("edittitle").value,
    desc:document.getElementById("editdesc").value
})
}else{
    return elem;
}
        })
        console.log(updateNotes);
        setNotes(updateNotes);
    }
  return (
    <>
<div className="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
        <button type="button" className="btn-close" data-dismiss="modal" aria-label="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
  <div className="mb-3">
    <label for="title" className="form-label">Nome</label>
    <input type="text" className="form-control" id="edittitle" placeholder="Digite seu nome"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Comentário</label>
    <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder="Digite seu comentário"></textarea>
  </div>
</form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={updateHandler}>Editar</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
