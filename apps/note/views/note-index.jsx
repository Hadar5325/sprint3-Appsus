const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { noteService } from '../services/note.service.js'

import { NoteEdit } from "./note-edit.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import {NoteFilter} from "../cmps/note-filter.jsx"


export function NoteIndex() {

    const [notes, setNotes] = useState([])
    const [bgColor, setBgColor] = useState(null)
    const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadNotes()
    }, [])

    // useEffect(() => {
    //   console.log('bgcolor:',bgColor)  
    // }, [bgColor])

    function loadNotes() {
        noteService.query().then(notesToUpdate => {
            setNotes(notesToUpdate)
            console.log('notes :', notes)
        })
    }

    function onChangeBgColor(noteId, target) {
        console.log('noteId,ev:', noteId, target)
        const color = target.value
        noteService.get(noteId).then((note) => {
            note.color = color
            noteService.save(note)
            // setBgColor(color)
            const currNote = notes.find((note) => note.id === noteId)
            currNote.color = color
            console.log('notes after changing color:',notes)
            setNotes(prevNotes=>([...prevNotes]))
        })

    }


    function onRemoveNote(ev, noteId) {
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
        <NoteFilter/>
        <Link className="edit-link" to="/note/edit">Add Note</Link> 
        <NoteList notes={notes} loadNotes={loadNotes} onRemoveNote={onRemoveNote} onChangeBgColor={onChangeBgColor} />
    </section>

}



