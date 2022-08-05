import {firestore} from './FirebaseConfig';
import User from "./User";

const getUsers = async () => {
    const usersCollection = firestore.collection("users");
    const allUsers = await usersCollection.get();

    return allUsers.docs.map(u => u.data());
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getUserData = async (email) => {
    const res = await fetch(`/api/users?email=${email}`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
    });

    return res.json();
}

const postUserData = async (email) => {
    const res = await fetch(`/api/users?email=${email}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email }),
    });

    return res.json();
};

const addUser = async (userObj) => {
    const usersCollection = firestore.collection("users");

    try {
        const toFirestore = User.toFirestore(userObj);
        await usersCollection.add(toFirestore);
        console.log("Added user");
    } catch(err) {
        console.error("An error occurred...", err);
        return new Error(err);
    }

    return userObj;
}

const queryUser = async (email) => {
    const usersCollection = firestore.collection("users");

    try {
        const queryUserByEmail = usersCollection.where("email", "==", email);
        const queryResults = await queryUserByEmail.get();

        return queryResults.docs[0].data();

    } catch(err) {
        console.error("An error occurred...", err);
        return {};
    }
}


export { random, addUser, queryUser, getUserData, postUserData };

