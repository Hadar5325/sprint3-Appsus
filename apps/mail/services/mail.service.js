import { asyncStorageService } from "../../../services/async-storage.service.js"
import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"
const MAIL_KEY = 'mailDB'

_createMails()

export const mailService = {
    query,
    getDefaultFilter,
    remove,
}

function getDefaultFilter() {
    return {
        status: '',
        txt: '',
        isRead: false,
        isStared: false,
        lables: []
    }

}

function remove(carId) {
    return asyncStorageService.remove(MAIL_KEY, carId)
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
                mails = mails.filter(mail => {
                    console.log(mail.subject)
                    const mailSubject = mail.subject.toLowerCase()
                    if (mailSubject.includes(filterBy.txt)) return mail
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

function _loggedinUser() {
    return {
        email: 'user@appsus.com',
        fullname: 'mahatma appsus'
    }
}