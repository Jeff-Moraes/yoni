import GlobalStyle from "../styles/GlobalStyle";

import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </>
  )
}
