import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailFilter({onSetFilter}){


    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())

    useEffect(()=>{
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handelChange({target}){
        
        console.log(target.value)
        let {status, txt, isRead, isStared, lables} = target
        // save what the use typed
        setFilterByToEdit(target.value)
    }

    return <section>
        <label htmlFor="searchInput">Search:</label>
        <input
        id="searchInput"
        type="text"
        name="txt"
        placeholder="Search"
        onChange={handelChange}
        // value={filterByToEdit.txt}
        />
    </section>

}