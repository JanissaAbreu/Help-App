import React from "react";
import RandomSuggestion from "./RandomSuggestion";
import { useState } from "react";
import happyResponses from '../data/happy.json';
import sadResponses from '../data/sad.json'
import tiredResponses from '../data/tired.json'
import angryResponses from '../data/angry.json'
import boredResponses from '../data/bored.json'
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
        //for happy
        if ((feeling === ("im happy")) || (feeling === ("i'm happy")) || (feeling === ("Im happy")) || (feeling === ("I'm happy"))){
            //randomNum = random index from json file from 0 to whatever the length of the json file is
            randomNum = Math.floor(Math.random() * happyResponses.length);
            //randHappyResponse = the random response selected from the JSON file
            randResponse = happyResponses[randomNum].happy;

            //Set the appResponse state to whatever random response is selected from the json file
            setResponse(randResponse);
        } else if ((feeling === ("im sad")) || (feeling === ("i'm sad")) || (feeling === ("Im sad")) || (feeling === ("I'm sad"))){
            //randomNum = random index from json file from 0 to whatever the length of the json file is
            randomNum = Math.floor(Math.random() * sadResponses.length);
            //randHappyResponse = the random response selected from the JSON file
            randResponse = sadResponses[randomNum].sad;

            //Set the appResponse state to whatever random response is selected from the json file
            setResponse(randResponse);
        } else if ((feeling === ("im tired")) || (feeling === ("i'm tired")) || (feeling === ("Im tired")) || (feeling === ("I'm tired"))){
            //randomNum = random index from json file from 0 to whatever the length of the json file is
            randomNum = Math.floor(Math.random() * tiredResponses.length);
            //randHappyResponse = the random response selected from the JSON file
            randResponse = tiredResponses[randomNum].tired;

            //Set the appResponse state to whatever random response is selected from the json file
            setResponse(randResponse);
        } else if ((feeling === ("im angry")) || (feeling === ("i'm angry")) || (feeling === ("Im angry")) || (feeling === ("I'm angry"))){
            //randomNum = random index from json file from 0 to whatever the length of the json file is
            randomNum = Math.floor(Math.random() * angryResponses.length);
            //randHappyResponse = the random response selected from the JSON file
            randResponse = angryResponses[randomNum].angry;

            //Set the appResponse state to whatever random response is selected from the json file
            setResponse(randResponse);
        } else if ((feeling === ("im bored")) || (feeling === ("i'm bored")) || (feeling === ("Im bored")) || (feeling === ("I'm bored"))){
            //randomNum = random index from json file from 0 to whatever the length of the json file is
            randomNum = Math.floor(Math.random() * boredResponses.length);
            //randHappyResponse = the random response selected from the JSON file
            randResponse = boredResponses[randomNum].bored;

            //Set the appResponse state to whatever random response is selected from the json file
            setResponse(randResponse);
        }
    }

    return (
        <div className = "mainScreen">
            <h1 className="mainScreenTitle">Help-Bot</h1>
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