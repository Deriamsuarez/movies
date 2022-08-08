import React from 'react'
import menu from '../utils/menu.js'

const NavBar = () => {

    return (
        <section className="navBarContainer">
            <div className="nav">
                <ul>
                    <li><div className="logo"></div></li>
                    {menu.menuPrincipal.map((item, index) =>
                        <li key={index}>{item.name}</li>)}
                </ul>
                <i className="fi fi-br-search"></i>
            </div>
        </section>
    )
}

export default NavBar