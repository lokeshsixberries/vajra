import Header from '../components/Header';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
