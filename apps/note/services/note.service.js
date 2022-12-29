
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
            notes = notes.filter(note => regex.test(note.info.txt || note.info.title))
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
    return { info:{ txt:'', title:''}, type: '' }
}


function _makeNotes() {
    console.log('Hi from note service')
    let notes = storageService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) notes = [
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            color:'white',
            info: {
                title: 'what do you want?',
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-txt",
            isPinned: true,
            color:'white',
            info: {
                title: 'say hello',
                txt: "hi hi!"
            }
        },
        {
            id: "n103",
            type: "note-txt",
            isPinned: true,
            color:'white',
            info: {
                title: 'What am I doin?',
                txt: "doing my sprint!"
            }
        },
        {
            id: "n104",
            type: "note-todos",
            isPinned: true,
            color:'white',
            info: {
                title: 'What am I doin?',
                txt: "doing my sprint!"
            }
        },
        {
            id: "n105",
            type: "note-img",
            isPinned: true,
            color:'white',
            info: {
                title: 'What am I doin?',
                txt: "doing my sprint!"
            }
        },
        {
            id: "n106",
            type: "note-video",
            isPinned: true,
            color:'white',
            info: {
                title: 'What am I doin?',
                txt: "doing my sprint!"
            }
        }
    ]
    storageService.saveToStorage(NOTE_KEY, notes)
}

