const { Link } = ReactRouterDOM

import { MailPreview } from "./email-preview.jsx"

export function MailList({ mails, onRemove }) {
    return <ul className="mail-list">
        {mails.map(mail => <li key={mail.id}>
                <MailPreview mail={mail} onRemove={onRemove} />
                <Link to={`/mail/${mail.id}`}>Details</Link>
            </li>
        )}
    </ul>
}