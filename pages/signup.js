import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../components/database/AuthProvider';
import { postUserData } from "../components/database/Util";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [error, setError] = useState(null);

    const router = useRouter();
    const { createUserWithEmailAndPassword } = useAuth();

    const onSubmit = (e) => {
        setError(null);
        if(passwordOne === passwordTwo) {
            createUserWithEmailAndPassword(email, passwordOne)
                .then(authUser => {
                    console.log("Success. The user is created in Firebase")
                    router.push("/");
                })
                .catch(error => {
                    // An error occurred. Set error message to be displayed to user
                    setError(error.message)
                });
        } else {
            setError("Password do not match")
            e.preventDefault();
        }

        (async () => {
            const req = await postUserData(email);
            console.log(req);
            console.log("Sent data to backend!");
        })();
    }

    const emailOnChange = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }

    const passwordOneOnChange = (e) => {
        setPasswordOne(e.target.value);
        console.log(passwordOne);
    }

    const passwordTwoOnChange = (e) => {
        setPasswordTwo(e.target.value);
        console.log(passwordTwo);
    }

  return (
    <div>
      <Head>
        <title> Sign Up</title>
        <meta name="description" content="generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='signUp'>
        <section>
          <section>
            {/* SignUp */}
            <div> 
              <h1> Capital <span>Fun </span></h1>

              <div> 
                <input type="text" id="name" name="name" required
                 minLength="4" size="10" placeholder='Enter Email' value={email} onChange={emailOnChange}></input>
                 <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>
                 </div>
              </div>
              
              <div> 
                <input type="password" id="name" name="name" required
                       minLength="4" maxLength="8" size="10" placeholder='Enter Password' value={passwordOne} onChange={passwordOneOnChange}></input>
                 <div>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.804 9c1.038-1.793 2.977-3 5.196-3 3.311 0 6 2.689 6 6s-2.689 6-6 6c-2.219 0-4.158-1.207-5.196-3h-3.804l-1.506-1.503-1.494 1.503-1.48-1.503-1.52 1.503-3-3.032 2.53-2.968h10.274zm7.696 1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"/></svg>
                 </div>
              </div>

              {/* Account Type */}
              <div> 
                <input type="password" id="name" name="name" required
                 minLength="4" maxLength="8" size="10" placeholder='Re-Enter password' value={passwordTwo} onChange={passwordTwoOnChange}></input>
                 <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>
                 </div>
              </div>
            </div>
            <div> 
              <button onClick={e => onSubmit(e)}>Sign Up</button>
              <h3 onClick={() => {
                window.location.href = "/login"
              }}> Don't have an account? Sign Up now</h3>
            </div>
          </section>
        </section>
        <section>
          {/* Background SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="591" height="1080" fill="none" stroke='$secondary-color'>
              <path d="M194.703 -1.27119L590.622 1385.44L6.51458 1388.03L4.21288e-05 -0.40679L194.703 -1.27119Z" fill="#0076C4" stroke='$secondary-color'/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="664" height="256" viewBox="0 0 664 256" fill="none">
            <path d="M-571.585 192L-472.894 96H-374.203L-275.512 0L-176.821 160L-78.1304 64L20.5606 32L119.252 96L217.943 0L316.634 256L415.325 128L514.016 256L612.707 64L711.398 192H810.089L908.78 0V256H810.089H711.398H612.707H514.016H415.325H316.634H217.943H119.252H20.5606H-78.1304H-176.821H-275.512H-374.203H-472.894H-571.585V192Z" fill="#DE2F1F"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="664" height="344" viewBox="0 0 664 344" fill="none">
            <path d="M0 264.8L105.133 132.5H210.267L315.4 0.200195L420.533 220.7L525.667 88.4002L630.8 44.3002L735.933 132.5L841.067 0.200195L946.2 353L1051.33 176.6L1156.47 353L1261.6 88.4002L1366.73 264.8H1471.87L1577 0.200195V353H1471.87H1366.73H1261.6H1156.47H1051.33H946.2H841.067H735.933H630.8H525.667H420.533H315.4H210.267H105.133H0V264.8Z" fill="#B8271A"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="524" height="247" viewBox="0 0 524 247" fill="none">
            <path d="M0.840332 192L99.5313 96H198.222L296.913 0L395.604 160L494.295 64L592.986 32L691.677 96L790.368 0L889.059 256L987.75 128L1086.44 256L1185.13 64L1283.82 192H1382.51L1481.21 0V256H1382.51H1283.82H1185.13H1086.44H987.75H889.059H790.368H691.677H592.986H494.295H395.604H296.913H198.222H99.5313H0.840332V192Z" fill="#DE2F1F"/>
          </svg>
          <section>
            {/* Content */}
            <h2> Capital Fun</h2>
            <h3>CapitalFun is hackathon project created by Anish Tenepalli, Deyby Rodriguez, Eric Shau, Hou Chi Chan, Kheshav Kumar, Kunal Mohindra, Liam Forges, Vincent Cai to CHANGE banking for GOOD. The application is intended to address financial illiteracy across America, and in college students specifically, by "gamifying" banking. Features include streaks, missions, and communities systems that reward or encourage good financial decisions.</h3>
          </section>
        </section>
      </main>


    </div>
  )
}