import '@/styles/globals.css';
import '@/styles/fallback.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '../translations';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
