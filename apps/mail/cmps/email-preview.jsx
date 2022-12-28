
export function MailPreview({ mail }) {
    return <article className="mail-preview">
        <div>{mail.id}</div>
        <div>{mail.body}</div>
        <div>{mail.subject}</div>
        <div>{mail.sentAt}</div>
    </article>
}