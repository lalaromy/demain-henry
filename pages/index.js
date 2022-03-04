import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Countdown from 'react-countdown';

export default function Home() {

  const date = new Date()

  const Completionist = () => <span>You are good to go!</span>;

  var d = new Date();
  d.setHours(24, 0, 0, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Demain</title>
      </Head>

      <main className={styles.main}>
      <Countdown date={d}>
        <Completionist />
      </Countdown>
      </main>
       
    </div>
  )
}
