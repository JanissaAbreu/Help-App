import React from "react";
import '../styling/RandomSuggestion.css';

const RandomSuggestion = (props) => {
    return (
        <div>
            <p>{props.response}</p>
        </div>
    );
}

export default RandomSuggestion