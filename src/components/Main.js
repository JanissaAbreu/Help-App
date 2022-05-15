import React from "react";
import RandomSuggestion from "./RandomSuggestion";
import { useState } from "react";
import happyResponses from '../data/happy.json';
import '../styling/Main.css';

const MainScreen = (props) => {
    const [userFeeling, setFeeling] = useState('');
    const [appResponse, setResponse] = useState('');

    //This "enterButton" function is where the code for the enter button will go
    //Right now it just console.logs "Enter button clicked"
    const enterButton = () => {
        var feeling = {userFeeling}.userFeeling.trim(); //Whatever the user types into the textbox. Trim() removes any extra spacing
        var randomNum;
        var randResponse;
        
        if (feeling === "im happy"){
            //randomNum = random index from json file from 0 to whatever the length of the json file is
            randomNum = Math.floor(Math.random() * happyResponses.length);
            //randHappyResponse = the random response selected from the JSON file
            randResponse = happyResponses[randomNum].happy;

            //Set the appResponse state to whatever random response is selected from the json file
            setResponse(randResponse);
        }
    }

    return (
        <div className = "mainScreen">
            <h1 className="mainScreenTitle">TITLE</h1>
            <input className = "userInput" placeholder = "Type emotion here..." type = "text" onChange={(event) => setFeeling(event.target.value)}/>
            <button className="enterButton" onClick = {() => enterButton()}>Enter</button>
            <br/>
            <a href = "/howtouse">
                <button className="howToButton">How To Use</button>
            </a>

            <RandomSuggestion response = {appResponse}/>

        </div>
    );
}

export default MainScreen;