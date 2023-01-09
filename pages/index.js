import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>#boraCodar - player de música</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.box}>
          <div className={styles.content}>
            <div className={styles.divImg}>
              <Image
                src='/hans.png'
                alt='logo de uma música'
                width={84}
                height={84}
                className={styles.img}
              />
              <div className={styles.description}>
                <span className={styles.title}>Acorda Devinho</span>
                <p className={styles.subtitle}>Banda Rocketseat</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
