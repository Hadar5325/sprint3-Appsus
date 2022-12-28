import { MailPreview } from "./email-preview.jsx"

export function MailList({ mails }) {
    return <ul>
        {mails.map(mail=>{
            <li key={mail.id}>
            </li>
        })}
        <MailPreview />
    </ul>
}