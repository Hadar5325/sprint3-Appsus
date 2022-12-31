const { useState } = React
const { Link } = ReactRouterDOM

export function UtilsSection() {
    return <div className="container-left">
        <div className="left-nav">
            <div className="div-new-btn">
                <div className="pen-btn"></div>
                {/* <div role='button'>New email */}
                {/* <Link to={"/mail/mailCompose"}>Create New Mail</Link> */}
                <Link to={"/mail/mailCompose"}>Create New Mail</Link>
                {/* </div> */}
                {/* <button className="add-new-email">New Email</button> */}
            </div>
            <div className="options-in-nav">
                <Link to='/mail' className="inbox" > Inbox </Link>
                <Link to='/mail' className="starred" > Starred </Link>
                <Link to='/mail' className="sent-Mail" > Sent Mail </Link>
                <Link to='/mail' className="drafts" > Drafts </Link>
            </div>
        </div>
    </div>

}