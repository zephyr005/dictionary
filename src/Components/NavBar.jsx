import React from 'react';
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="flex justify-between px-8 py-4 bg-primary text-white">
            <h1 className="text-xl font-bold">Dictionary App</h1>
            <ul className="flex gap-8">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
