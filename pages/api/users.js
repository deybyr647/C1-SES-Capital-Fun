// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addUser, queryUser } from "../../components/database/Util";
import User from "../../components/database/User";
import firestore from "../../components/database/FirebaseConfig";

const handler = async (req, res) => {
  let email = req.query.email;
  let uid = req.query.uid;

  if(req.method === "POST"){
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
  }

  if(req.method === "GET"){
    let userData = await queryUser(email);
    res.status(200).json({...userData});
  } else {
    res.status(500).json({ uid })
  }


}

export default handler;
