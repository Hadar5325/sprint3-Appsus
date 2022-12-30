const { useState, useEffect } = React
const { Link, Outlet } = ReactRouterDOM

import { MailCompose } from "../cmps/email-compose.jsx"
import { MailFilter } from "../cmps/email-filter.jsx"
import { MailList } from "../cmps/email-list.jsx"
import { UtilsSection } from "../cmps/UtilsSection.jsx"

import { mailService } from "../services/mail.service.js"


export function MailIndex() {
    const [mails, setMails] = useState()
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [composeMail, setComposeMail] = useState(false)
    // console.log(filterBy)

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy).then(mailsToUpdate => {
            setMails(mailsToUpdate)
        })
    }

    function onSetFilter(filter) {
        setFilterBy(filter)
    }

    function onRemove(mailId) {
        mailService.remove(mailId).then(() => {
            const updateMails = mails.filter(mail => mailId !== mail.id)
            setMails(updateMails)
        }).catch((err) => {
            console.log('error deleting mail', err)
        })
    }
    function onNewMail(){
        {console.log('hi!')}
        
        {setComposeMail(true)}
        return <Link to="mail/mailCompose"> Add new mail</Link>
    }


    if (!mails) return <div>loading..</div>
    return <div>
        {(composeMail) && <Outlet/>}
        
        <button onClick={()=>{onNewMail()}}>Add New Mail </button>
        <MailFilter onSetFilter={onSetFilter}/>
        <div className="main-data">
            <div className="left-nav">
                <UtilsSection />
            </div>
            {<MailList mails={mails} className="mail-list" onRemove={onRemove} />}
        </div>
    </div>

}

