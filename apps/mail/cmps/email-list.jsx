const { Link } = ReactRouterDOM
const { useState } = React

import { MailPreview } from "./email-preview.jsx"

export function MailList({ mails, onRemove }) {
    // const [numOfUnreadMails, setNumOfUnreadMails] = useState(0)

    // console.log(numOfUnreadMails)

    return <ul className="mail-list">
        {mails.map(mail => <li key={mail.id}>
            {/* {checkIsReadMail(mail.isRead)} */}
            <MailPreview mail={mail} onRemove={onRemove} />
            <Link to={`/mail/${mail.id}`}>Details</Link>
        </li>
        )}
    </ul>

    // function checkIsReadMail(isReadMail) {
    //     console.log(isReadMail)
    //     if (!isReadMail) {
    //         setNumOfUnreadMails((prev) => {
    //             return prev + 1
    //         })
    //     }
    // }
}
    // if(!isReadMail){
    //     setNumOfUnreadMails((prev)=>{
    //         numOfUnreadMails = prev + 1
    //     }
    // }



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