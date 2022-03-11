import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {

    return (
        <footer className='bg-black py-6'>
        <a
        className='grid justify-center'
        >
        <Link href="/" className="cursor-pointer">
        <Image src="/images/CBCP-Long.png" alt="logo" width={300} height={35}/>
        </Link>
        <small className='text-logo text-center'>Copyright 2022</small>
        </a>
      </footer>
    )
}