import { CarouselOne, CarouselTwo, CarouselThree, CarouselFour, CarouselFive } from "../../components/books-data"
import Head from "next/head"
import Link from 'next/link'
import Image from 'next/image'
import Navigator from '../../components/navigator'


export async function getStaticProps() {

  const carouselonePhotos = CarouselOne;
  const carouseltwoPhotos = CarouselTwo;
  const carouselthreePhotos = CarouselThree;
  const carouselfourPhotos = CarouselFour;
  const carouselfivePhotos = CarouselFive;


  return {
    props: {
        carouselonePhotos,
        carouseltwoPhotos,
        carouselthreePhotos,
        carouselfourPhotos,
        carouselfivePhotos
    }
  }
}


export default function Drawings({carouselonePhotos, carouseltwoPhotos, carouselthreePhotos, carouselfourPhotos, carouselfivePhotos}) {


  return (
    <>
      <Head>
        <title>CBCP Artist Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid justify-center px-3 py-10 font-Nanum">
        <h1 className="uppercase font-bold leading-snug text-black"
        style={{
          fontSize: '40px'
        }}
        >Artist Books</h1>

      </div>
      <main className='flex flex-col justify-center items-center font-Nanum'>
      <div className="p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {carouselonePhotos.map(carouselonePhoto => (
            <div className='hover:opacity-50 p-3 break-inside' key={carouselonePhoto.id}>
              <Link href={"/"}>
              <img
              src={carouselonePhoto.url} 
              alt="image"
              ></img>
              </Link>

            </div>
          ))}
            Vicious Cycle
            Screenprint on Lettra

            3.5”x5” closed, 21”x5” open

            Ed. 13
      </div>
      <div className="p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {carouseltwoPhotos.map(carouseltwoPhoto => (
            <div className='hover:opacity-50 p-3 break-inside' key={carouseltwoPhoto.id}>
              <Link href={"/"}>
              <img
              src={carouseltwoPhoto.url} 
              alt="image"
              ></img>
              </Link>

            </div>
          ))}
          Can You Tell
            Risograph Print

            2.25”x4.25” closed, 9”x11” Open

            Ed. 25
      </div>
      <div className="p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {carouselthreePhotos.map(carouselthreePhoto => (
            <div className='hover:opacity-50 p-3 break-inside' key={carouselthreePhoto.id}>
              <Link href={"/"}>
              <img
              src={carouselthreePhoto.url} 
              alt="image"
              ></img>
              </Link>

            </div>
          ))}
         Let Me Out
            Letterpress and Relief on Lettra

            3”x3” closed, 9”x9” open

            Ed. 30
      </div>
      <div className="p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {carouselfourPhotos.map(carouselfourPhoto => (
            <div className='hover:opacity-50 p-3 break-inside' key={carouselfourPhoto.id}>
              <Link href={"/"}>
              <img
              src={carouselfourPhoto.url} 
              alt="image"
              ></img>
              </Link>

            </div>
          ))}
         Help
            Letterpress and Relief on Lettra

            3”x3” closed, 9”x9” open

            Ed. 30
      </div>
      <div className="p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {carouselfivePhotos.map(carouselfivePhoto => (
            <div className='hover:opacity-50 p-3 break-inside' key={carouselfivePhoto.id}>
              <Link href={"/"}>
              <img
              src={carouselfivePhoto.url} 
              alt="image"
              ></img>
              </Link>

            </div>
          ))}
        Welcome to College
            Letterpress and Relief on Lettra

            3”x3” closed, 9”x9” open

            Ed. 30
      </div>
      </main>
      <footer>
        <a>
          Powered by{' '}
          <span>
            <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

      
    </>
  )
}
