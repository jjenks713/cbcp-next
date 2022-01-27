import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { mainData }  from './main-data';
import Nav from 'react-bootstrap'

export async function getStaticProps() {

  const mainPhotos = mainData;

  return {
    props: {
      mainPhotos
    }
  }
}


export default function Home({mainPhotos}) {

console.log(mainPhotos);

  return (
    <div className={styles.container}>
      <Head>
        <title>CBCP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul>
          <li>
          <h1><Link href="/">Home</Link></h1>
          </li>
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
{/*       <div>
      {mainPhotos.map(mainPhoto => (
            <div key={mainPhoto.id}>
              <Link href={"/"}>
              <Image src={mainPhoto.url} alt="image" width={200} height={200}></Image>
              </Link>
              <ul>
                <li>Name: {mainPhoto.name}</li>
                <li>Medium: {mainPhoto.med}</li>
                <li>Size: {mainPhoto.size}</li>
                <li>Edition: {mainPhoto.ed}</li>
              </ul>
            </div>
          ))}

      </div> */}

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}