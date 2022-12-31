const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { About } from "./views/about.jsx"
import { Home } from "./views/home.jsx"
import { MailIndex } from "./apps/mail/views/mail-index.jsx"
import { NoteIndex } from "./apps/note/views/note-index.jsx"

import { NoteEdit } from "./apps/note/views/note-edit.jsx"
import { MailDetails } from "./apps/mail/views/mail-details.jsx"
import { MailCompose } from "./apps/mail/cmps/email-compose.jsx"



export function App() {
    return <Router>

        {/* <section className="app"> */}
        <section className="total-app">
            <AppHeader className="header" />
            <section className="total-info">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />

                <Route path="/mail" element={<MailIndex />} >
                    <Route path="/mail/mailCompose" element={<MailCompose />} />
                </Route>
                {/* <Route path="/mail/mailCompose" element={<MailCompose />} /> */}

                <Route path="/mail/:mailId" element={<MailDetails />} />


                    <Route path="/note" element={<NoteIndex />} />
                    <Route path="/note/edit" element={<NoteEdit />} />
                    <Route path="/note/edit/:noteId" element={<NoteEdit />} />
                </Routes>
            </section>
        </section>
    </Router>
}
