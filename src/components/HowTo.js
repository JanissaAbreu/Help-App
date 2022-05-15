import React from "react";
import '../styling/HowTo.css';

const HowToPage = (props) => {
    return (
        <div className = "HowToPage">
            <h1 className = "howToHeader">How To Use the Help-Bot</h1>
            <p className = "instructions">
                Type an emotion in the textbox and press enter to get a response <br/>
                <b>For example...</b> <br/>
                'I'm bored' , 'I'm happy', 'I'm sad' <br/>
                Once you hit the enter button, you'll get a response from our help-bot depending on your emotion.<br/>
            </p>

            <a href = "/">
                <button>Go Back</button>
            </a>
            
        </div>
    )
}

export default HowToPage;