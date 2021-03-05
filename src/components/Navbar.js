import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <title>Web Ilham</title>
            <h1>Web Ilham</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Portfolio</Link>
            </div>
            </nav>
    )
}
