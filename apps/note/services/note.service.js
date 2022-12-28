
// import {storageService} from 

import { storageService } from "../../../services/storage.service.js"
import {asyncStorageService } from '../../../services/async-storage.service.js'

const NOTE_KEY='noteDB'
_makeNotes()

export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote
}

function query() {
    console.log('hi from query:')
    return asyncStorageService
    .query(NOTE_KEY)
        .then(notes)
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

function  getEmptyNote(id='', type = '', isPinned = false, info={txt:''}) {
    return { id, type, isPinned, info }
}


function _makeNotes (){
    console.log('Hi from note service')
    let notes= storageService.loadFromStorage(NOTE_KEY)
     if (!notes||!notes.length) notes=[
        {
         id: "n101",
         type: "note-txt",
         isPinned: true,
         info: {
         txt: "Fullstack Me Baby!"
         }
        },
        {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
            txt: "hi hi!"
            }
           },
           {
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
            txt: "doing my sprint!"
            }
           }
        ]
        storageService.saveToStorage(NOTE_KEY,notes)
}

