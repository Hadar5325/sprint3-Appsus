
export function MailPreview({ mail , onRemove}) {
    return <article className="mail-preview">
        <div>
            <div>{mail.subject}</div>
            <div>{mail.sentAt}</div>
            <div>{mail.body}</div>
            <button onClick={()=>{onRemove(mail.id)}}>Remove</button>
        </div>
    </article>
}