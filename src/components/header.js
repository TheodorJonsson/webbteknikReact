import React from "react";
import {NavLink, Link} from "react-router-dom"


class Header extends React.Component {
    // Functions to change back and forth when the mouse enters the menu items
    handleMouseEnter = e => {
        e.target.style.backgroundColor = "blue";
    }
    handleMouseLeave = e => {
        e.target.style.backgroundColor = "#AFC8AD";
    }
    render(){
        return<header id="headerItems">
            <NavLink to="home"exact activeClassName="active"><h1 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Hem</h1></NavLink>
            <NavLink to="menu"><h1 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Meny</h1></NavLink>
            <NavLink to="contact"><h1 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Kontakt</h1></NavLink>
            <NavLink to="gallery"><h1 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >Galleri</h1></NavLink>
            <NavLink to="review"><h1 onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>Recensioner</h1></NavLink>
        </header>
    }
}

function handleMouse(){

}

export default Header;