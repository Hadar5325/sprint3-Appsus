const { useState, useEffect } = React

import { noteService } from "../services/note.service.js"

export function NoteFilter({onSetFilter}){

    const [filterByToEdit, setFilterByToEdit] = useState(noteService.getDefaultFilter())
   
    useEffect(() => {
        // update father cmp that filters change very type
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field } = target
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


return <section className="input-container main-layout">
    <form className="filter-form main-layout flex"  onSubmit={onSubmitFilter}>
<label >Filter   <input className="inherit" type="text" name="info" onChange={handleChange} /></label>
{/* <select name="type" onChange={handleChange} >
<option value="">All</option>
<option value="note-txt">text</option>
<option value="note-todo">toDo</option>
<option value="note-img">Image</option>
<option value="note-vid">Video</option>
</select> */}
{/* <button>Filter</button> */}
</form>
{/* <hr /> */}
</section>
}