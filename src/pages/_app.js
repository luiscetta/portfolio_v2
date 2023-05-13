import '@/styles/globals.css';
import '@/styles/fallback.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import translation from '../translations';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '../translations';

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={translation}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </I18nextProvider>
  );
}
