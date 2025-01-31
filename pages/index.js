import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Krakoa</h1>
      </header>

      <main className={styles.main}>
        <section className={styles.gateSection}>
          <Image
            src="/images/krakoan-gate-1.gif"
            alt="Animated Krakoan Gate"
            width={500} // Adjust width accordingly
            height={500} // Adjust height accordingly
            priority // Ensures image loads quickly
            className={styles.gateImage}
          />
        </section>
      </main>

      <footer className={styles.footer}>
        <h4>© {new Date().getFullYear()} Krakoa</h4>
      </footer>
    </div>
  );
}
