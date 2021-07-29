import { articles } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filterd = articles.filter((article) => article.id == id);
  if (filterd.length > 0) {
    res.status(200).json(filterd[0]);
  } else {
    res
      .status(404)
      .json({ message: `Articles with the id of ${id} is not Found.` });
  }
}
