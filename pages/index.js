import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Countdown from "react-countdown";

export default function Home() {
  const [showText, setShowText] = useState(false);

  const date = new Date();
  const Completionist = () => <span>Time is over</span>;
  var d = new Date();
  d.setHours(24, 0, 0, 0);

  const InfoText = (
    <div className="info-text">
      <p>
        Tomorrow - the hypothetical, transcendental, purely imaginary idea of
        potential future happenings.
      </p>
      <p>
        Both, 'past' as well as 'future', are fictional terms - neither of them
        are objective, nor can ever be taken for certain. Nevertheless, they
        have become indispensable to our way of thinking and our understanding
        of time: We define ourselves through our past and adapt our life to a
        future that is not even real. This project is meant to point out the
        ubiquity of desperation for control over time.
      </p>
    </div>
  );

  return (
    <div>
      <Head>
        <title>Demain</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className="info-box">
          <img
            src="./question-mark.png"
            alt="question-mark"
            className="question-mark"
            onMouseOver={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
            onClick={() => setShowText(!showText)}
          />
          {showText ? InfoText : null}
        </div>

        <Countdown date={d}>
          <Completionist />
        </Countdown>

        <h2>Artwork will be online tomorrow</h2>

        <div className="footer-text">
          <p>+ coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon + coming soon +</p>
        </div>
      </main>


    </div>
  );
}
