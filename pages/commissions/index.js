import { commissionData } from "../../commission-data"
import Head from "next/head"
import Link from 'next/link'
import Image from 'next/image'
import Navigator from '../../components/navigator'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export async function getStaticProps() {

  const commissionPhotos = commissionData;

  return {
    props: {
      commissionPhotos
    }
  }
}


export default function Drawings({commissionPhotos}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false);
  const [modalPhotos, setModalData] = useState('');
  console.log(modalPhotos)
  let size = '';

  if (modalPhotos[3]) {
    size = modalPhotos[3]
  } else {
    size = "N/A";
  }

  return (
    <>
      <Head>
        <title>CBCP Commissions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      </Head>
      <div className="grid justify-center px-3 py-10 font-Nanum">
        <h1 className="uppercase font-bold leading-snug text-black"
        style={{
          fontSize: '40px'
        }}
        >Commissions</h1>

      </div>
      <main className='flex flex-col justify-center items-center font-Nanum'>
      <div className="p-10 masonry sm:masonry-sm md:masonry-md lg:masonry-lg">
      {commissionPhotos.map(commissionPhoto => (
            <div className='hover:opacity-50 p-3 break-inside drop-shadow-xl' key={commissionPhoto.id}>
              <a onClick={() => {
                  handleOpen();
                  setModalData([commissionPhoto.ed, commissionPhoto.med, commissionPhoto.name, commissionPhoto.size, commissionPhoto.url, commissionPhoto.val])
                }}>
              <img // eslint-disable-line
              className='rounded-sm'
              src={commissionPhoto.url} 
              alt="image"
              ></img>
              </a>

              <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    key={modalPhotos[5]}
                    className="sm:bg-none"
                  >
                    <Box sx={style} key={modalPhotos}>
                    <button className='absolute right-0 top-0 pr-5 pt-2' onClick={handleClose}><i className="fa fa-window-close" style={{fontSize: '25px'}}></i></button>
                    <a>
                      <img // eslint-disable-line
                      className='p-5 rounded-sm'
                      src={modalPhotos[4]} 
                      alt="image"
                      />
                      </a>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        <ul>
                          <li key={modalPhotos[2]}>Name: {modalPhotos[2]}</li>
                          <li key={modalPhotos[1]}>Medium: {modalPhotos[1]}</li>
                          <li key={modalPhotos[3]}>Size: {size}</li>
                        </ul>                      
                      </Typography>
                    </Box>
                  </Modal>
            </div>
          ))}

      </div>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

      
    </>
  )
}
