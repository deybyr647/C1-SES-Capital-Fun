import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Template from '../components/template/Template'
import Loader from '../components/loader/Loader'
import HomeComp from '../components/home/Home'
import Missions from '../components/missions/Missions'
import MissionComplete from '../components/modals/MissionComplete'
import Streak from '../components/streak/Streak'
import {useAuth} from "../components/database/AuthProvider";
import {useEffect, useState} from "react";
import {getUserData} from "../components/database/Util";

export default function Home() {
    const { authUser } = useAuth();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        (async () => {
            const user = await getUserData(authUser.email);
            setUserData(user);
        })();
    }, [authUser])

    console.log(userData);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Loader></Loader> 
        <Streak streak="1"/>
        <Template>
          <HomeComp/>
        </Template>
      </main>
    </div>
  )
}


