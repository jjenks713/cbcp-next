import Image from 'next/image'
import Link from 'next/link'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <footer className='bg-black py-6'>
        <a
        className='grid justify-center'
        >
        <Link href="/" className="cursor-pointer">
        <Image src="/images/CBCP-Long.png" alt="logo" width={300} height={35}/>
        </Link>
        <ul className='flex justify-center text-logo text-center py-5'>
          <li className='px-2'>
          <a href="https://www.facebook.com/mary.jenkin.37"><FacebookIcon /></a>
          </li>
          <li className='px-2'>
        <a href="https://www.instagram.com/creepybutcutepress/?hl=en"><InstagramIcon /></a>
          </li>

        </ul>
        <small className='text-logo text-center'><CopyrightIcon /> 2022 Creepy but Cute Press</small>
        </a>
      </footer>
    )
}