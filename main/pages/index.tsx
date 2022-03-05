import type { NextPage } from "next";
import Head from "next/head";
import { AnimatedTitle } from "../components/AnimatedTitle";
import { Credits } from "../components/Credits";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <AnimatedTitle />
        </h1>

        <p className={styles.description}>An Absolute Entertainment.</p>
      </main>
      <footer className="mb-5">
        <Credits />
      </footer>
    </div>
  );
};

export default Home;
