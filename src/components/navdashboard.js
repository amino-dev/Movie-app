import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../img/logo.png'

function NavDashboard() {
    return (
        <Navbar id="navbar" expand="lg" bg="light" variant="light">
        <Navbar.Brand>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="dashboard-title">Dashboard</span>
        </Navbar.Brand>  
      </Navbar>
    )
}

export default NavDashboard
