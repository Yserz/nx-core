import { add } from '@nx-core/lib';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const result = add([1, 3]);
  return (
    <>
      <Head>
        <title>Welcome to ui!</title>
      </Head>
      <main className="app">{result}</main>
    </>
  );
}

export default CustomApp;
