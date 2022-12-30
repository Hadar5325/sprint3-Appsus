const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full">
        <Link to="/">
         <div className="logo-container flex main-layout"> <h3 className="logo"> Apsus </h3> <img src={'./assets/img/kengeru.png'} /></div> 
        </Link>
        <nav className="main-layout">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
