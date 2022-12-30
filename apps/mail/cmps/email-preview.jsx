
export function MailPreview({ mail, onRemove, unReadMessage }) {
    const mailIsRead = (mail.isRead) ? 'true' : 'false'

    if (!mail.isRead) {
        unReadMessage(1, mail)
    }
    return <article className="mail-preview">
        <div>
            <div>mail is read: {mailIsRead}</div>
            <div>{mail.subject}</div>
            <div>{mail.sentAt}</div>
            <div>{mail.body}</div>
            <button onClick={() => { onRemove(mail.id) }}>Remove</button>
        </div>
    </article>
}