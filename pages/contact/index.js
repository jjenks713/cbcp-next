import Button from '@mui/material/Button';
import Footer from '../../components/footer'

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
        <div className="font-Nanum text-logo grid justify-center uppercase font-bold text-center">
        <h1 className='text-xl'>Send us an email at <a href="mailto:creepybutcutepress@gmail.com" className='text-center'>creepybutcutepress@gmail.com</a></h1>
        <small className='text-black text-xs'>
        To purchase, please add work title and quantity in message.<br />
        Payments made to Venmo: @Mary-Jenkin<br />
        Free Shipping on any order in the continental US.
        </small>
        <a // eslint-disable-line
                  className="hover:opacity-75 py-24 text-xl"
                  href="https://www.etsy.com/shop/creepybutcutepress"
                >
                  Or check out our Shop
                  <img src="images/etsy.png" alt="Etsy" className='px-10' />
        </a>
        </div>
        <Footer />
        </>
    )
}