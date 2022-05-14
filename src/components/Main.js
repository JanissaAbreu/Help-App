import React from "react";

const MainScreen = (props) => {
    return (
        <div className = "mainScreen">
            <h1 className="mainScreenTitle">TITLE</h1>
            <input className = "userInput" placeholder = "Type emotion here..." type = "text"/>
            <button className="enterButton">Enter</button>
            <br/>
            <a href = "/howtouse">
                <button className="howToButton">How To Use</button>
            </a>
        </div>
    );
}

export default MainScreen;