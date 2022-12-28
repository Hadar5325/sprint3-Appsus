const { Outlet, Link } = ReactRouterDOM

import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onChangeBgColor, onEditNote }) {
  console.log('notes at notelist:', notes)

  return <section>
    <div className="edit-link-container">
      
      <Link to="/note"></Link>
      <Link to="/note/edit">Write a note</Link></div>
    <Outlet/>

  <ul className="note-list clean-list flex">
    {notes.map(({ id, info }) => {
      return < li key={id} >< NotePreview info={info} />
        <section className='buttons-container flex'>
        <button onClick={onRemoveNote}>Remove</button>
          <button onClick={onChangeBgColor}>BG color</button>
          <button onClick={onEditNote}>EDIT TEXT</button>
          </section>
      </li>
    })}
  </ul >
  </section>

}
