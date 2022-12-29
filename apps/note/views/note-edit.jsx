
const { useState, useEffect, useRef } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())
    const navigate = useNavigate()
    const { noteId } = useParams()

useEffect(() => {
    // console.log('noteId:',noteId)
    if (!noteId) return
    loadNote()
}, [])

function loadNote() {
    noteService.get(noteId)
        .then((note) => setNoteToEdit(note))
        .catch((err) => {
            console.log('Had issues in note details', err)
            navigate('/note')
        })
}
    function onHandleChange({ target }) {
        console.log('target:', target)
        let { name: field, value } = target

        setNoteToEdit((prevNote) => {
            prevNote.info[field] = value
            return { ...prevNote }
        })

    }


    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit).then((note) => {
            console.log('note saved', note);
            setNoteToEdit(note)
            // showSuccessMsg('note saved!')
            navigate('/note')
        })

    }


    return <form className="note-edit-form" onSubmit={onSaveNote}>
         <h2>{noteToEdit.id ? 'Edit this note' : 'Add a new note'}</h2>
        <input type="text" name="title" placeholder="Title" onChange={onHandleChange} value={noteToEdit.info.title} />
        <textarea  name="txt" cols="70" rows="5" onChange={onHandleChange} value={noteToEdit.info.txt}> </textarea>
        <div className="edit-buttons-container">
            <button>{noteToEdit.id ? 'Save' : 'Add'}</button>
            <Link to="/note">Cancel</Link>
        </div>
    </form>

}

