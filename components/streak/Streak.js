import React from "react";
import {FaFacebookF} from 'react-icons/fa'

const streakDisappear = () => {
  document.getElementById("Streak").style.top = "-200%";
}

const url = "https://www.google.com/search?q=streak+symbol&tbm=isch&ved=2ahUKEwiNium5jq_5AhXStXIEHdAGAw0Q2-cCegQIABAA&oq=streak+symbol&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgYIABAeEAU6BwgAELEDEEM6BAgAEEM6BggAEB4QCDoECAAQGFC5Alj3FWCBF2gAcAB4AIABQ4gB1QOSAQE4mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=Eb7sYs29LdLrytMP0I2MaA&bih=736&biw=1440#imgrc=koPz9SPUAShCiM"
const shareLink = "http://www.facebook.com/share.php?u=" + url

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
                    <button onClick={()=>window.open(shareLink, '_blank')}> 
                        <FaFacebookF size="2rem"/>
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
