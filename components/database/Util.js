import { firestore } from './FirebaseConfig';
import User from "./User";

const getUsers = async () => {
    const usersCollection = firestore.collection("users");
    const allUsers = await usersCollection.get();

    return allUsers.docs.map(u => u.data());
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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


export { random, addUser, postUserData };

