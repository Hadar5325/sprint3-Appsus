const { useState, useEffect } = React
const { Link, Outlet, useParams, useLocation } = ReactRouterDOM

import { MailCompose } from "../cmps/email-compose.jsx"
import { MailFilter } from "../cmps/email-filter.jsx"
import { MailList } from "../cmps/email-list.jsx"
import { MailAppHeader } from "../cmps/mail-app-header.jsx"
import { UtilsSection } from "../cmps/UtilsSection.jsx"

import { mailService } from "../services/mail.service.js"

export function MailIndex() {
    const [mails, setMails] = useState()
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [composeMail, setComposeMail] = useState(false)

    const { pathname } = useLocation();
    let isMail = false
    if (pathname === '/mail') {
        isMail = true
    }
    if (pathname === '/mail/mailCompose') {
        isMail = false
    }

    useEffect(() => {
        loadMails()
    }, [filterBy])

    useEffect(() => {
        if (composeMail) console.log('true!')
    }, [composeMail])

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

    if (!mails) return <div>loading..</div>
    return <div className="div-main">
        <UtilsSection />
        <MailFilter onSetFilter={onSetFilter}/>
        <div className="main-contanier-emails">
            <div className="container-wrap-mails">
            {!isMail && <Outlet />}
            {isMail && <table className="wrap-mails" >
                <MailList mails={mails} className="mail-list" onRemove={onRemove} />
            </table>}
            </div>
        </div>
    </div>
}

