const { Outlet, Link } = ReactRouterDOM
const { useEffect } = React

// import { NoteEdit } from "../views/note-edit.jsx"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onChangeBgColor, onEditNote, loadNotes }) {

  // useEffect(() => loadNotes(), [])

  console.log('notes at notelist:', notes)

  return <section>
    {/* <NoteEdit loadNotes={loadNotes} /> */}
    <ul className="note-list clean-list flex">
      {notes.map(({ id, info }) => {
        return < li key={id} ><Link key={id} to={`/note/edit/${id}`}>< NotePreview info={info} /></Link>
          <section className='buttons-container flex'>
            <button onClick={(ev)=>onRemoveNote(ev,id)}><img src={'./assets/img/trash.svg'}  /></button>
           <label className="color-label"> <input type="color" onChange={onChangeBgColor}/></label> 
          </section>
        </li>
      })}
    </ul >
  </section>

}

