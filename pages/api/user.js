import propsFromCookies from "../../lib/propsFromCookies";

export default async function user(req, res) {
  const props = await propsFromCookies(req.cookies['sess']);
  res.json({ props });
};
