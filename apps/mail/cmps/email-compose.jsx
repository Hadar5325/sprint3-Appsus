const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailCompose() {

    const navigate = useNavigate()
    const [mailToAdd, setMailToAdd] = useState(mailService.getEmptyMail())
    // const [mailIsSent, setMailIsSent] = useState(false)

    // useEffect(()=>{
    //     console.log('inside!!!!!!!!!!')
    //     setMailIsSent(false)
    // }, [mailIsSent])


    function handleChange({ target }) {
        let { value, name: field } = target
        console.log(field)
        setMailToAdd((prevMail) => ({ ...prevMail, [field]: value , sentAt: Date.now()}))
    }

    function onSaveMail(ev) {
        ev.preventDefault()
        mailService.save(mailToAdd).then((mail)=>{
            console.log('mail saved', mail)
            navigate('/about')            
        })

    }

    return <section>
        <form onSubmit={onSaveMail}>
            <label htmlFor="to"></label>
            <input type="text"
                id="to"
                name="to"
                placeholder="To:"
                value={mailToAdd.to}
                onChange={handleChange} />

            <label htmlFor="subject:"></label>
            <input type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={mailToAdd.subject}
                onChange={handleChange}
            />


            <input type="text"
                name="body"
                placeholder="Text-Area"
                value={mailToAdd.body}
                onChange={handleChange} />
            <div>
                <button>Send mail</button>
                <Link to={"/mail"}>Cancel</Link>
            </div>
        </form>
    </section>

}