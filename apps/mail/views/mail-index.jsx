const { useState, useEffect } = React

import { MailFilter } from "../cmps/email-filter.jsx"
import { MailList } from "../cmps/email-list.jsx"
import { UtilsSection } from "../cmps/UtilsSection.jsx"

import { mailService } from "../services/mail.service.js"


export function MailIndex() {
    const [mails, setMails] = useState()
    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())

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

    if (!mails) return <div>loading..</div>
    return <div>
            <MailFilter onSetFilter={onSetFilter} />
            <div className="main-data">
            <div className="left-nav">
                <UtilsSection />
            </div>
            {<MailList mails={mails} className="mail-list" />}
        </div>
    </div>

}

