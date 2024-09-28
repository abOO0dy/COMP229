import React from 'react';
import { Link } from 'react-router-dom';
import '../src/app.css';
import '../src/assets/assignment1.css'

export default function Layout() {
    return (
        <>
            <img src= "../src/assets/Custom-Logo.jpeg" alt="Logo " className='logo'/>
            <h1 className='MainLayout-h1'>My Portfolio</h1>
            <nav className='nav'>
             <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <br />
            <br />
            <hr />
            
        </>

    );
}
