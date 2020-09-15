import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Boogle Book Search</Link>
                <Link className ='nav-link' to="/search">Search</Link>
                <Link className='nav-link'to="/saved">Saved</Link>
            </div>
        </nav>
    )

}export default Nav