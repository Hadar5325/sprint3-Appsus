const { useState } = React
const { Link } = ReactRouterDOM

export function UtilsSection() {
    return <div>

        <div className="div-new-btn">
            <div className="pen-btn"></div>
            {/* <div role='button'>New email */}
            {/* <Link to={"/mail/mailCompose"}>Create New Mail</Link> */}
            <Link to={"/mail/mailCompose"}>Create New Mail</Link> 

            {/* </div> */}
            {/* <button className="add-new-email">New Email</button> */}
        </div>
        {/* <Link className="left-thing" > Inbox </Link>
        <Link className="left-thing"> Starred </Link>
        <Link className="left-thing"> Sent Mail </Link>
        <Link className="left-thing"> Drafts </Link> */}
    </div>

}