const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

import { mailService } from "../services/mail.service.js"

export function MailDetails() {

    const [mail, setMail] = useState(null)

    const navigate = useNavigate()
    const params = useParams()
    const { mailId } = params

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        mailService.get(mailId)
            .then(mail => {
                mail.isRead = true
                mailService.save(mail)
                setMail(mail)
            })
            .catch((err) => {
                console.log('had issues in loading mail', err)
                navigator('/mails')
            })
    }

    function closeMail(){
        navigate ('/mail')
    }
    
    console.log(mail)
    if (!mail) return <div>Loading...</div>
    return <section className="mail-details">
        <h1>Mail:{mail.subject}</h1>
        <h5>{mail.body}</h5>
        <button onClick={closeMail}>close</button>
    </section>
}