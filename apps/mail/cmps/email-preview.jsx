const { Fragment } = React
const { Link } = ReactRouterDOM

export function MailPreview({ mail, onRemove, unReadMessage }) {
    const mailIsRead = (mail.isRead) ? 'true' : 'false'
    console.log('mail preview')
    if (!mail.isRead) {
        unReadMessage(1, mail)
    }
    return <Fragment>
        <td className="subject">{mail.subject} </td>
        <td className="body-msg">{mail.body} </td>
        <td className="sent-at">{mail.sentAt}</td>
        <td className="remove-btn">
            <button onClick={() => { onRemove(mail.id) }}>Remove</button>
        </td>
        <td className="details">
            <Link to={`/mail/${mail.id}`}>Details</Link>
        </td>
    </Fragment>
}