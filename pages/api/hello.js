// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getUsers from "../../components/database/Util";

const handler = async (req, res) => {
  const data = await getUsers();
  console.log(data);
  res.status(200).json(...data);
}

export default handler;
