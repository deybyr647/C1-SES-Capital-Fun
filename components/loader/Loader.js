import React from "react";
import { useEffect } from "react";

const loaderAppear = () => {
    document.getElementById("loader").style.top = "0%";
}

const loaderDisappear = () => {
    document.getElementById("loader").style.top = "-200%";
}

const streakAppear = () => {
    document.getElementById("Streak").style.top = "0px";
}

function Loader (){
    useEffect(() => {
        loaderDisappear();
        setTimeout(() => {
            streakAppear();
        }, 200);
    }, []);
    
    return (
        <section className="loader" id="loader">
            <section>
                <div>
                    <svg className="inside-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="5"/>
                    </svg>
                    <svg className="inside-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="5"/>
                    </svg>
                    <svg id="svgelem" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="100" r="80" stroke-width="7" fill="none" />
                    </svg>
                </div>
                <div>
                    <h1> Loading </h1>
                </div>
            </section>
        </section>
    )   
}

export default Loader;
