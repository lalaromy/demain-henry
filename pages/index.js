import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Countdown from "react-countdown";

export default function Home() {
  const date = new Date();
  const Completionist = () => <span>Time is over</span>;
  var d = new Date();
  d.setHours(24, 0, 0, 0);


  return (
    <div>
      <Head>
        <title>Demain</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Countdown date={d} daysInHours>
          <Completionist />
        </Countdown>
        <h2>Artwork will be online tomorrow</h2>
      </main>
    </div>
  );
}
