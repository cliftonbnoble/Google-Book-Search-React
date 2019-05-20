import React from "react";
import "./style.css"

function Logo() {
    return (
            <div className="logo">
                <img className="logo-position" src="http://www.cliftonnoble.com/wp-content/uploads/2019/05/book-emoji.png" alt="Book Icon"/>
                <h1 className="logo-text logo-position">Google Book Search </h1>
                <h5 className="logo-text logo-position">Built With React</h5>
            </div>
    )
}

export default Logo;