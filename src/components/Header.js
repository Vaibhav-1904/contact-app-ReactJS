import React from 'react'

const Header = () => {
    return( // These are Semantic UI classes(like Bootstrap)
        <div className = "ui fixed menu">
            <div className = "ui container center">
                <h1> Contacts Manager </h1>
            </div>

        </div>
    );
}

export default Header;


// you cannot use class as an attribute for an element(div) as class in JS are the classes for the Object,
// so we have to use className attribute. It is OOP