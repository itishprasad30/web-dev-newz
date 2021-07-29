import Link from "next/link";
import React from "react";
import Head from "next/head";
import Meta from "../components/Meta";

const about = () => {
  return (
    <div>
      <Meta title="About" />
      <main>
        <h1>This is an about Page</h1>
        <b>
          <u>
            <Link href="/"> Click here To : Go Back 👈</Link>
          </u>
        </b>
      </main>
    </div>
  );
};

export default about;
