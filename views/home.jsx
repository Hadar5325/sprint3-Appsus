const { Link } = ReactRouterDOM


export function Home() {

    return <section className="home ">
        <h1>what do you want to do today?</h1>
        <div className="home-links">
            <Link to="/mail" >Mail</Link>
            <Link to="/note">Note</Link>
        </div>
        <div className="img-container"><img src={'./assets/img/kengeru.png'} /></div>
    </section>
}