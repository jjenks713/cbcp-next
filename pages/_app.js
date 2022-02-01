import '../styles/tailwind.css'
import Navigator from '../components/navigator'


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Navigator />
    <Component {...pageProps} />
    </div>

  ) 
}

export default MyApp


