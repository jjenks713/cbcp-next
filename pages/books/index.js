import booksData from "../../books-data"
import Head from "next/head"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BookModal from "../../components/bookModal";
import Footer from '../../components/footer'
import LinearProgress from '@mui/material/LinearProgress';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';


export async function getStaticProps() {
  const bookDatas = await booksData.map((books) => {
    const data = books
    return data
  });

  const data = bookDatas

  return {
    props: {
        data
    }
  }
}


export default function Drawings(data) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  },[])

  const dataArray = data.data

  return (
    <>
      <Head>
        <title>CBCP Artist Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isLoading ?
      <>
      <div className="grid justify-center px-3 py-10 font-Nanum">
        <h1 className="uppercase font-bold leading-snug text-black"
        style={{
          fontSize: '40px'
        }}
        >Artist Books</h1>

      </div>
      <main className='flex flex-col justify-center items-center font-Nanum px-3 sm:px-24'>
        <div className="sm:p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
            {dataArray.map(data => (
              <div className='sm:p-3 py-10 break-inside w-96 sm:w-96 md:w-80' key={data.id}>
                    <Carousel>
                        {data.image.map(image => (
                          <>

                          <img //eslint-disable-line
                          src={image}
                          alt={data.name}
                          />
                        </>
                        ))}
                    </Carousel>
                    <div className="grid justify-center">
                    <BookModal data={data}/>

                    </div>
              </div>
              
            ))}
        </div>
      </main>
      <Footer />
      </>
      :
      <div className='grid justify center pb-96'>    
        <Box sx={{ width: '100%' }}>
        <LinearProgress color="success" />
        </Box>
      </div>
    }
    </>
  )
}
