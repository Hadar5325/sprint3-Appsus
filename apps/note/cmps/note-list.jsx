const { Outlet, Link } = ReactRouterDOM
const { useEffect } = React

import { NoteEdit } from "../views/note-edit.jsx"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onChangeBgColor, onEditNote, loadNotes }) {

  // useEffect(() => loadNotes(), [])

  console.log('notes at notelist:', notes)

  return <section>
    {/* <NoteEdit loadNotes={loadNotes} /> */}
    <ul className="note-list clean-list flex">
      {notes.map(({ id, info }) => {
        return <Link key={id} to={`/note/edit/${id}`}>< li key={id} >< NotePreview info={info} />
          <section className='buttons-container flex'>
            <button onClick={(ev)=>onRemoveNote(ev,id)}>Remove</button>
            {/* <input type="color" /> onClick={onChangeBgColor}>BG color */}
          </section>
        </li></Link>
      })}
    </ul >
  </section>

}

