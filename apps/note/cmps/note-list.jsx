const { Outlet, Link } = ReactRouterDOM
const { useEffect, useState, useRef } = React

// import { NoteEdit } from "../views/note-edit.jsx"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onChangeBgColor }) {




  const [bgColor, setBgColor] = useState(null)

  function onSetbgColor({ value }) {
    console.log('value from set bg color:',value)
    setBgColor(value)
  }

  console.log('notes at notelist:', notes)

  return <section>
    {/* <NoteEdit loadNotes={loadNotes} /> */}
    <ul className="note-list clean-list flex">
      {notes.map(({ id, info, color }) => {

        return < li  key={id} style={{ backgroundColor: color }} ><Link key={id} to={`/note/edit/${id}`}>< NotePreview info={info} /></Link>
          <section className='buttons-container grid'>
            <button onClick={(ev) => onRemoveNote(ev, id)}><img src={'./assets/img/trash.svg'} /></button>
            <label htmlFor="color" className="color-label"> <img src={'./assets/img/paintbrush.svg'} /> </label>
            <input id="color" type="color" value={color} onChange={({ target }) => {
              // console.log('id:',id)
              onChangeBgColor(id, target)
              onSetbgColor(target)
            }} />
           
          </section>
        </li>
      })}
    </ul >
  </section>

}

