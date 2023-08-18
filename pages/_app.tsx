import GraphQlProvider from "@providers/GraphQlProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GraphQlProvider>
      <Component {...pageProps} />;
    </GraphQlProvider>
  );
}

export default MyApp;
