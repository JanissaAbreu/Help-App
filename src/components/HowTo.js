import React from "react";
import '../styling/HowTo.css';

const HowToPage = (props) => {
    return (
        <div className = "HowToPage">
            <h1 className = "howToHeader">Instructions</h1>
            <p className = "instructions">Instructions go here...</p>

            <a href = "/">
                <button>Go Back</button>
            </a>
            
        </div>
    )
}

export default HowToPage;