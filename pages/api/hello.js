// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getUsers, {addUser} from "../../components/database/Util";
import User from "../../components/database/User";
import firestore from "../../components/database/FirebaseConfig";

const handler = async (req, res) => {
  let deyby = new User({first: "Deyby", last: "Rodriguez"}, "deybyr647@gmail.com", "Save 4 Retirement");

  setTimeout(() => {
    console.log(deyby);
    addUser(deyby);
  }, 2000)

  res.status(200).json(User.toFirestore(deyby));
}

export default handler;
