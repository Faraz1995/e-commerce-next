import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>shopppp</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the best shop dude</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <ul className={styles.grid}>
          {products.map((product, index) => (
            <li className={styles.card} key={index}>
              <a href='https://nextjs.org/docs'>
                <img src={product.image} alt='' />
                <h2>{product.title}</h2>
                <p>{product.price} $</p>
                <p>{product.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
