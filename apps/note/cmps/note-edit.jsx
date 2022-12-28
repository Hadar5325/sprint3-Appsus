
const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { noteService } from "../services/note.service.js"

export function NoteEdit() {
    const [noteToEdit, setNoteToEdit] = useState(noteService.getEmptyNote())

const navigate = useNavigate()
// const { noteId } = useParams()

    function onHandleChange({ target }) {
        let { name: field, value } = target
        setNoteToEdit((prevNote) => ({ ...prevNote, info: { [field]: value } }))

    }

    function onSaveNote(ev) {
        ev.preventDefault()
        noteService.save(noteToEdit).then((note) => {
            console.log('note saved', note);
        
            // showSuccessMsg('note saved!')
            // navigate('/note')
        })
    }


    return <form onSubmit={onSaveNote}>
        <input type="text" name="title" placeholder="Title" onChange={onHandleChange} />
        <textarea name="txt" cols="70" rows="5" onChange={onHandleChange} > </textarea> <button>Save</button>
    </form>

}


