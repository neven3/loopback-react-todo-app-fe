import React from 'react';

function Navbar(props) {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Todo List</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;