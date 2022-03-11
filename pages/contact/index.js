import Button from '@mui/material/Button';
import Footer from '../../components/footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {

    return (
        <>
        <div className="grid justify-center px-10 py-10 font-Nanum">
            <h1 className="uppercase font-bold leading-snug text-black"
                style={{
                    fontSize: '40px'
                }}
                >Contact Us</h1>

        </div>
        <h1 className='text-xl text-center text-logo uppercase font-bold'>Follow us</h1>
        <ul className='flex justify-center text-black text-center pb-5'>
          <li className='px-2'>
          <a href="https://www.facebook.com/mary.jenkin.37" target="_blank" //eslint-disable-line
          ><FacebookIcon /></a>
          </li>
          <li className='px-2'>
        <a href="https://www.instagram.com/creepybutcutepress/?hl=en" target="_blank" //eslint-disable-line
        ><InstagramIcon /></a>
          </li>
        </ul>

        <div className="font-Nanum text-logo grid justify-center uppercase font-bold text-center">
        <h1 className='text-xl'>Send us an email at <a href="mailto:creepybutcutepress@gmail.com" className='text-center'>creepybutcutepress@gmail.com</a></h1>
        <small className='text-black text-xs'>
        To purchase, please add work title and quantity in message.<br />
        Payments made to Venmo: @Mary-Jenkin<br />
        Free Shipping on any order in the continental US.
        </small>
        <a // eslint-disable-line
                  className="hover:opacity-75 pb-24 pt-10 text-xl"
                  href="https://www.etsy.com/shop/creepybutcutepress"
                >
                  <p className='pb-2'>Or check out our Shop</p>
                  <img src="images/etsy.png" alt="Etsy" className='px-10' />
        </a>
        </div>
        <Footer />
        </>
    )
}