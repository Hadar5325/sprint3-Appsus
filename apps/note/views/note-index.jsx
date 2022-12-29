const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js'

import {NoteEdit } from "./note-edit.jsx"
import { NoteList } from "../cmps/note-list.jsx"


export function NoteIndex() {
  
    const [notes, setNotes] = useState([])
    const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadNotes()
    }, [])

    function  loadNotes() {
        noteService.query().then(notesToUpdate => {
            setNotes(notesToUpdate)
            console.log('notes :',notes )
        })
    }

    function onChangeBgColor(noteId,color){

    }


    function onRemoveNote(ev,noteId) {
        ev.stopPropagation()
        noteService.remove(noteId).then(() => {
            const updatednotes = notes.filter(note => note.id !== noteId)
            setNotes(updatednotes)
            // eventBusService.emit('show-user-msg', {txt: 'noteRemoved', type: 'success'})
            showSuccessMsg('note removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove note, try again please!')
            })
    }



// console.log('notes:',notes)
return <section>
<Link className="edit-link" to="/note/edit">Add Note</Link>
<NoteList notes={notes}  loadNotes={loadNotes} onRemoveNote={onRemoveNote} onChangeBgColor={onChangeBgColor}  />
</section>

}



