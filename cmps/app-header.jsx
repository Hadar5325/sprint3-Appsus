const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    
    return <header className="app-header full">
        <Link to="/">
            <h3>LOGO!</h3>
            {/* <div className="logo-container flex main-layout"> <h3 className="logo"> Apsus </h3> <img src={'./assets/img/kengeru.png'} /></div>  */}
        </Link>
        <nav className="header-nav main-layout">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail" >Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
        <button class="nav-bars">≡</button>
    </header>
}
