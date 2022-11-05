import "../styles/globals.css";
import "../styles/Iransans.css";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import RTL from "../components/RTL";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "../styles/menuIcon.css";
import client from "../Apollo/apollo-client";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Toaster />
      <RTL>
        <ApolloProvider client={client}>
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-F5SB89CQ3L" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-F5SB89CQ3L')
            `}
          </Script>
          <Component {...pageProps} />
        </ApolloProvider>
      </RTL>
    </>
  );
}

export default MyApp;
