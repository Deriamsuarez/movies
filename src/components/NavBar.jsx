import React from 'react'

const NavBar = () => {
    return (
        <section className="navBarContainer">
            <div className="nav">
                <ul>
                    <li><div className="logo"></div></li>
                    <li>Movies</li>
                    <li>TV Shows</li>
                    <li>People</li>
                    <li>More</li>
                </ul>
                <i className="fi fi-br-search"></i>
            </div>
        </section>
    )
}

export default NavBar