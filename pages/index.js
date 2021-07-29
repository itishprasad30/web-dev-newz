import Head from "next/head";
import Link from "next/link";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import { server } from "../config";

export default function Home({ articles }) {
  // console.log(articles);
  // {
  //   articles.map((arr) => console.log(arr.title));
  // }

  return (
    <div>
      <Meta />

      <main>
        <h1>Welcome To Next Home Page</h1>
        <h2>
          Click below to go to next page <br />
        </h2>
        <b>
          <u>
            <Link href="/about"> Go To About js Page 👉</Link>
          </u>
        </b>
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
