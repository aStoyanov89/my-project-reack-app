import React from 'react'
import { routes } from '../../utils/constants'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='nav-bar'>
            <ul className='ul-container'>
                {Object.values(routes)
                .filter((el) => el.isVisibleInNavigation)
                .map((route) => 
                <li key={route.name}>
                    <Link to={route.path}>{route.name}</Link>
                </li>)}
            </ul>
        </nav>
    )
}

export default Navigation