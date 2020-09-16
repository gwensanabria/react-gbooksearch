import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    
    return (
        <nav style={{backgroundColor: 'lavender'}} className='navbar navbar-expand-lg'>
            <div className='container'>
                <Link style={{color: 'black'}} className='navbar-brand' to='/'>Google Book Search</Link>
                <Link style={{color: 'black'}} className ='nav-link' to="/search">Search</Link>
                <Link style={{color: 'black'}} className='nav-link'to="/saved">Saved</Link>
            </div>
        </nav>
    )

}export default Nav