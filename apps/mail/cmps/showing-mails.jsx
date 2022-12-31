import { MailList } from "../cmps/email-list.jsx"

export function ShowingMails({mails, onRemove}) {
    console.log(mails, onRemove)
    // return <h1>hello</h1>
    return <MailList mails={mails} className="mail-list" onRemove={onRemove} />
}