import React, { Component } from "react";
import {Items} from "./menu"
import './navbar.css'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Recipy</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {Items.map((item, index) => {
                        return(
                            <li key={index}><a className={item.className} href={item.url}> {item.title} </a></li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar; 