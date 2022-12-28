
export function MailPreview({ mail }) {
    return <article className="mail-preview">
        <tr>
            <tr>
                <td>{mail.subject}</td>
                <td>{mail.sentAt}</td>
            </tr>
            <tr>
                <td>{mail.body}</td>
            </tr>
        </tr>
    </article>
}