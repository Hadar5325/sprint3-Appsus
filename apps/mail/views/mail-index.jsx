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
    // function onNewMail(){        
    //     {setComposeMail(true)}
    //     <Link to="/mailCompose">Add new mail</Link>
    //     // return <Link to="mailCompose"> Add new mail</Link>
    // }

    // function onNewMail(){
    //     <Link to={'/mailCompose'}>go there!</Link>
    // }
    // function onNewMail(){
    //     {console.log('hiii!')}
    //     <Link to="/about">wowwwww</Link> 
    // }

    if (!mails) return <div>loading..</div>
    return <div className="div-main">
        <UtilsSection/>
        <div className="main-contanier-emails">
            <table className="wrap-mails">
            {<MailList mails={mails} className="mail-list" onRemove={onRemove} />}
            </table>
        </div>

        {/* <div className="left-nav">
            <Outlet />
            <MailFilter onSetFilter={onSetFilter} />
            <div className="main-data">
                <div className="left-nav">
                    <UtilsSection />
                </div>
                {<MailList mails={mails} className="mail-list" onRemove={onRemove} />}
            </div>
        </div> */}
    </div>
}

