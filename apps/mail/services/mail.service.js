import { asyncStorageService } from "../../../services/async-storage.service.js"
import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"
const MAIL_KEY = 'mailDB'

_createMails()

export const mailService = {
    query,
    getDefaultFilter,
}

function getDefaultFilter() {
    return {
        status: '',
        txt: '',
        isRead: '',
        isStared: '',
        lables: []
    }

}

// function query(filterBy = getDefaultFilter()){
//     console.log(fil)
//     return asyncStorageService.query(MAIL_KEY)
//     .then(mails=> mails)
// }
function query(filterBy) {
    return asyncStorageService.query(MAIL_KEY)
        .then(mails => {
            console.log(filterBy)
            if (filterBy.txt) {
                console.log('inside')
                mails = mails.filter(mail => {
                    const mailSubject = mail.subject.toLowerCase()
                    if (mailSubject.includes(filterBy)) return mail
                })
            }
            return mails
        })
}



function _createMails() {

    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {

        mails = []
        mails.push(_createMail('Miss you! 1', '1 Would love to catch up sometimes', false, 15555555555, '1momo@momo.com'))
        mails.push(_createMail('Miss you! 2', '2 sometimes', false, 15555555555, '2momo@momo.com'))
        mails.push(_createMail('Miss you! 3', '3 catch up sometimes', true, 10, '3@momo.com'))
        storageService.saveToStorage(MAIL_KEY, mails)
    }
}

function _createMail(subject, body, isRead, sentAt, to) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead,
        sentAt,
        to
    }
}