import React from "react";

    const streakDisappear = () => {
        document.getElementById("Streak").style.top = "-200%";
    }

function Streak (props){
    // Whoever is doing later; Change 'r' when it's smaller to something like 12.5 or something
    // .red class is making it red;


    return (
        <section className="streak" id="Streak">
            <section>
                <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 225 225" fill="none">
                    <path d="M217.738 119.101C195.655 74.3316 117.027 71.9175 136.016 6.84766C137.422 2.01954 130.811 -1.71128 125.466 0.812514C74.4078 24.2947 37.6962 71.3689 68.5002 133.037C71.032 138.085 63.4365 142.803 57.9509 139.511C32.4919 124.478 29.8194 102.861 32.0699 87.3895C32.9138 81.6835 23.3491 78.9403 19.2701 83.6587C9.70536 95.0706 0 113.505 0 141.267C5.34498 202.716 71.876 221.589 95.7877 224.003C129.967 227.405 166.96 222.467 193.545 203.484C222.801 182.306 233.491 148.509 217.738 119.101ZM87.2076 174.296C107.462 170.455 117.871 159.043 120.684 148.948C125.326 133.257 107.181 117.894 119.418 93.0954C124.06 113.615 165.413 126.453 165.413 148.838C166.538 176.6 127.998 200.411 87.2076 174.296Z" fill="white"/>
                </svg>
                <h1> {props.streak} day streak!</h1>
                <section>
                    {/* Days */}
                    <div>
                        <svg className="red" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Sun </h1>
                    </div>

                    <div>
                        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Mon </h1>
                    </div>

                    <div>
                        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Tue </h1>
                    </div>

                    <div>
                        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Wed </h1>
                    </div>

                    <div>
                        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Thur </h1>
                    </div>

                    <div>
                        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Fri </h1>
                    </div>

                    <div>
                        <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="25" r="22.5"/>
                        </svg>
                        <h1> Sat </h1>
                    </div>
                </section>
                <section>
                    {/* Share / Continue */}
                    <button> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
                    </button>
                    <button onClick={streakDisappear}> 
                        Continue
                    </button>
                </section>
            </section>
        </section>
    )   
}

export default Streak;
