



export function NoteList({notes}) {

    return <ul>
      {notes.map((note)=>{
        <li key={note.id}>{note.info.txt}</li>
      })  }

    </ul>

}
