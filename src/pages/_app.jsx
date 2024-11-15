import "../styles/global.css";
import Head from "next/head";
import { RatioProvider } from "@/contexts/RatioContext";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>現実チェック</title>
      </Head>
      <RatioProvider>
        <Component {...pageProps} />
      </RatioProvider>
    </>
  );
};

export default App;

App.displayName = "/_app";
