import React from "react";
import '../styling/HowTo.css';

const HowToPage = (props) => {
    return (
        <div className = "HowToPage">
            <h1 className = "howToHeader">How To Use The Help-Bot</h1>
            <p className = "instructions">
                Type an emotion in the textbox and press enter to get a response <br/>
                <br/>
                <b>Available Commands</b><br/>
                I'm bored , I'm happy, I'm sad, I'm tired, I'm angry<br/>
                <br/>
                Once you hit the enter button, you'll get a response from our help-bot depending on your emotion.<br/>
            </p>

            <a href = "/">
                <button className="goBackButton">Go Back</button>
            </a>
            
        </div>
    )
}

export default HowToPage;