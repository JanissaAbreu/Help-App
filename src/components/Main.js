import React from "react";

const MainScreen = (props) => {
    //This "enterButton" function is where the code for the enter button will go
    //Right now it just console.logs "Enter button clicked"
    const enterButton = () => {
        console.log("Enter button clicked")
    }

    return (
        <div className = "mainScreen">
            <h1 className="mainScreenTitle">TITLE</h1>
            <input className = "userInput" placeholder = "Type emotion here..." type = "text"/>
            <button className="enterButton" onClick = {() => {enterButton()}}>Enter</button>
            <br/>
            <a href = "/howtouse">
                <button className="howToButton">How To Use</button>
            </a>
        </div>
    );
}

export default MainScreen;