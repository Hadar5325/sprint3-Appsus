import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFilter({ onSetFilter }) {


    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())

    console.log(filterByToEdit)
    useEffect(()=>{
        onSetFilter(filterByToEdit)
    },[filterByToEdit])



    function handelChange({ target }) {
        let {value} = target
        setFilterByToEdit((prevFilter) => ({...prevFilter , txt: value}))
    }

    return <section>
        <form>
            <label htmlFor="searchInput">Search:</label>
            <input
                id="searchInput"
                type="text"
                name="txt"
                placeholder="Search"
                onChange={handelChange}
                value= {filterByToEdit.txt}
            />
        </form>
    </section>

}