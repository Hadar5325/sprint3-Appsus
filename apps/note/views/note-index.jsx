const { useState, useEffect } = React


import { noteService } from '../services/note.service.js'

import {NoteEdit } from "../cmps/note-edit.jsx"
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



// console.log('notes:',notes)
return <section>
<div>hi!</div>
<NoteEdit/>
<NoteList notes={notes}/>
</section>

}



