import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krakoa - An Island Nation</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/Krakoan/Krakoan.ttf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Krakoa
        </h1>
        <div className={styles.GateContainer}>
          <div style={{display:'none'}}>
          /* 
          Krakoan Gate Graphic credit to https://twitter.com/KrakoaWelcomes
          */
          </div>

        <img src="/images/krakoan-gate-1.gif" alt="Your Name" className={styles.Gate} />
        </div>
      </main>

      <footer className={styles.footer}>
        <h4>© 2022 Krakoa</h4>
      </footer>
    </div>
  )
}
