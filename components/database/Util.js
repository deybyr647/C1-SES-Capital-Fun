import firestore from './FirebaseConfig';

const getUsers = async () => {
    const usersCollection = firestore.collection("users");
    const allUsers = await usersCollection.get();

    return allUsers.docs.map(u => u.data());
};

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { random };
export default getUsers;

