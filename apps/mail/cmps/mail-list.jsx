export function MailList() {

    return <div>Mail list</div>

}


// const { Link } = ReactRouterDOM

// const { useState } = React
// import { MailPreview } from "./email-preview.jsx"
// const [numOfUnreadMails, setNumOfUnreadMails] = useState(0)

// console.log(numOfUnreadMails)

// export function MailList({ mails, onRemove }) {
//     return <ul className="mail-list">
//         {mails.map(mail => {
//             if(!mail.isRead) setNumOfUnreadMails(prev=>prev+1)
//            return <li key={mail.id}>
//                 <MailPreview mail={mail} onRemove={onRemove} />
//                 <Link to={`/mail/${mail.id}`}>Details</Link>
//             </li>
//         }
//         )}
//     </ul>
// }