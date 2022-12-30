const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"
import { MailPreview } from "./email-preview.jsx"

export function MailList({ mails, onRemove }) {
    // const [numOfUnreadMails, setNumOfUnreadMails] = useState(mailService.getDefaultFilter())
    const [numOfUnreadMails, setNumOfUnreadMails] = useState(0)

    useEffect(()=>{
        console.log("from email list", numOfUnreadMails)
    }, [numOfUnreadMails])
    // console.log(numOfUnreadMails)



    function unReadMessage(unReadMessage, mail){
        // console.log(mail)
        // console.log(mail.isCountedIfUnRead, "mail.isCountedIfUnRead")
        if(mail.isCountedIfUnRead) {
            // console.log('not going in!')
            return 
        }
        if(mail.isCountedIfUnRead === false){
            // console.log('inside')
            // console.log('hi!')
            mail.isCountedIfUnRead = true
            mailService.save(mail).then(()=>{
            })
            setNumOfUnreadMails((prev)=>{
                // console.log(prev)
                // console.log(prev + unReadMessage)
                return prev+ unReadMessage
            })
        }
        // setNumOfUnreadMails((prev)=>{
        //     console.log(unReadMessage, "unread message")
        //     // return prev + unReadMessage
        // })
        // setNumOfUnreadMails((prev)=>{
        //     console.log(prev)
        // })
    }



    return <ul className="mail-list">
        {mails.map(mail => <li key={mail.id}>
            {/* {checkIsReadMail(mail.isRead)} */}
            <MailPreview mail={mail} onRemove={onRemove} unReadMessage={unReadMessage}/>
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




