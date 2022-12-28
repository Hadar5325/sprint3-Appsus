import { MailList } from "../cmps/email-list.jsx"
import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query().then(mailsToUpdate => {
            setMails(mailsToUpdate)
        })
    }
    if(!mails)return <div>loading..</div>
    return <div>
        mail app
        {<MailList mails={mails} />}
    </div>

}

