// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getUsers from "../../components/database/Util";
import User from "../../components/database/User";
import firestore from "../../components/database/FirebaseConfig";

const handler = async (req, res) => {
  const data = await getUsers();
  //console.log(data);
  let deyby = new User({first: "Deyby", last: "Rodriguez"}, "deybyr647@gmail.com", "Save 4 Retirement");
  console.log(deyby);

  res.status(200).json(...data);
}

export default handler;
