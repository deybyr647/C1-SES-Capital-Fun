// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUsers, addUser } from "../../components/database/Util";
import User from "../../components/database/User";
import firestore from "../../components/database/FirebaseConfig";

const handler = async (req, res) => {

  if(req.method === "POST"){
    let email = req.query.email;
    let goal = "Save 4 Retirement"
    const name = {
      first: "",
      last: ""
    }
    let user = new User(name, email, goal);

    setTimeout(() => {
      addUser(User.toFirestore(user));
    }, 2000);

    res.status(200).json(User.toFirestore(user));
  } else {
    res.status(200).json(req.body);
  }


}

export default handler;
