import firestore from './FirebaseConfig';

const getUsers = async () => {
    const usersCollection = firestore.collection("users");
    const allUsers = await usersCollection.get();

    return allUsers.docs.map(u => u.data());
};

export default getUsers;

