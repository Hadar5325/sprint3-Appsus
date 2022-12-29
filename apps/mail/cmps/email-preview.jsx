
export function MailPreview({ mail }) {
    return <article className="mail-preview">
        <div>
            <div>{mail.subject}</div>
            <div>{mail.sentAt}</div>
            <div>{mail.body}</div>
        </div>
    </article>
}