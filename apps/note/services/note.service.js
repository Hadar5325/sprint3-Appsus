
// import {storageService} from 

import { storageService } from "../../../services/storage.service.js"
import { asyncStorageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
_makeNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter
}

function query(filterBy=getDefaultFilter()) {
    console.log('hi from query:')
    return asyncStorageService.query(NOTE_KEY)
    .then(notes => {
        if (filterBy.info) {
            const regex = new RegExp(filterBy.info, 'i')
            notes = notes.filter(note => regex.test(note.info.txt + note.info.title))
        }
        if (filterBy.type) {
            notes = notes.filter(note => note.type === filterBy.type)
        }
        return notes
    })
}

function get(noteId) {
    return asyncStorageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return asyncStorageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return asyncStorageService.put(NOTE_KEY, note)
    } else {
        return asyncStorageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote(id = '', type = '', isPinned = false, info = {title:'', txt: '' },color='white') {
    return { id, type, isPinned, info,color }
}

function getDefaultFilter() {
    return { info:'', type: '' }
}


function _makeNotes() {
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            color:'white',
            info: {
                title: 'סרטים לא לראות',
                txt: "תעלת בלאומליך, הסיפור שאינו נגמר, ישמח חתני, משיח, פרסיליה מלכת המדבר, החברה ,Awakening ,נפלאות התבונה ,מה עובר על גלברט גריפ ,סיפורה של שפחה ,בן גוריון אפילוג, שעה  אפלה ,שלטים  "
            }
        },
        {
            id: "n102",
            type: "note-txt",
            isPinned: true,
            color:'#d8ce6b',
            info: {
                title: 'ציטוטים נבחרים',
                txt: "אם רעב שונאך האכילהו לחם ואם צמא השקנו מים כי גחלים אתה חותה על ראשו וה' ישלם לך"
            }
        },
        {
            id: "n103",
            type: "note-txt",
            isPinned: true,
            color:'#add8e6',
            info: {
                title: 'דברים לדחות למחר' ,
                txt: "לעשות כושר, לשלם חשבון חשמל"
            }
        },
        {
            id: "n104",
            type: "note-todos",
            isPinned: true,
            color:'#ffc107',
            info: {
                title: 'What am I doin?',
                txt: "doing my sprint!"
            }
        },
        {
            id: "n105",
            type: "note-img",
            isPinned: true,
            color:'#ff5722',
            info: {
                title: 'I am a note',
                txt: "who are you?"
            }
        },
        {
            id: "n106",
            type: "note-video",
            isPinned: true,
            color:'#ffeb3b',
            info: {
                title: 'yep ,I am the last one from storage...',
                txt: "add some new one! "
            }
        }
    ]
    storageService.saveToStorage(NOTE_KEY, notes)
}

