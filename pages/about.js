import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/About.module.scss'

export default function About() {
return (
    <>
    <Head>
    <link
            rel="preload"
            href="/fonts/Krakoan/Krakoan.ttf"
            as="font"
            crossOrigin=""
          />
    </Head>
    <div className={styles.About}>
      <div className={styles.About_container}>
        <h1 className={styles.About}>Welcome</h1>
        <p className={styles.About_text}>The Mutant Nation of Krakoa welcomes all mutants.We offer you a place to grow and live in peace. </p>
      </div>
    </div>
    
    </>
)

}