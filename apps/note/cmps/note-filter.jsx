

export function NoteFilter({onSetFilter}){

    const [filterByToEdit, setFilterByToEdit] = useState(noteService.getDefaultFilter())
   
    useEffect(() => {
        // update father cmp that filters change very type
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


return <section className="input-container">
    <form onSubmit={onSubmitFilter}>
<label >Filter   <input type="text" name="info" onChange={(ev)=>handleChange(ev)} /></label>
<select name="type" onChange={(ev)=>handleChange(ev)} >
<option value="">All</option>
<option value="txt">text</option>
<option value="todo">toDo</option>
<option value="img">Image</option>
<option value="vid">Video</option>
</select>
</form>
{/* <hr /> */}
</section>
}