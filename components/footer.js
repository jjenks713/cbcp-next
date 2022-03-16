import Image from 'next/image'
import Link from 'next/link'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return (
        <footer className='bg-black py-1'
        style={{
          backgroundImage: "url('/images/confet.png')",
          backgroundSize: "cover"
        }}
        >
        <div
        className='grid justify-center'
        >
          <div>
            <Link href="/" className="cursor-pointer">
            <Image src="/images/logo-trans.png" alt="logo" width={600} height={100}/>
            </Link>
          </div>
          <div className='grid justify-center'>
            <ul className='flex text-logo text-center py-1'>
              <li className='px-2'>
              <a href="https://www.facebook.com/mary.jenkin.37"><FacebookIcon /></a>
              </li>
              <li className='px-2'>
              <a href="https://www.instagram.com/creepybutcutepress/?hl=en"><InstagramIcon /></a>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <div className='grid justify-center'>
          <small className='text-logo text-center'><CopyrightIcon /> 2022 Creepy but Cute Press</small>
          </div>

        </div>
      </footer>
    )
}