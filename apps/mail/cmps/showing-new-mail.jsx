import { MailList } from "./email-list";

export function showingMails() {
    return <MailList mails={mails} className="mail-list" onRemove={onRemove} />
}