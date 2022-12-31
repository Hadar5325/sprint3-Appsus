const { Fragment } = React
export function MailPreview({ mail, onRemove, unReadMessage }) {
    const mailIsRead = (mail.isRead) ? 'true' : 'false'
    console.log('mail preview')
    if (!mail.isRead) {
        unReadMessage(1, mail)
    }
    return <Fragment>
            <td>{mail.subject} </td>
            <td>{mail.body} </td>
            <td>{mail.subject} </td>

            {/* <div>mail is read: {mailIsRead}</div>
            <div>{mail.subject}</div>
            <div>{mail.sentAt}</div>
            <div>{mail.body}</div>
            <button onClick={() => { onRemove(mail.id) }}>Remove</button> */}

    </Fragment>
}