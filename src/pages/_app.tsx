// Types
import type { AppProps } from "next/app";

// Components
import Head from "next/head";

// Styles
import GlobalStyle from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>NakamotoDAO</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
