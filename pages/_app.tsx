import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Layout } from '@components/Layout';

export default function App(props: AppProps) {
  const {
    Component,
    pageProps,
    router: {
      pathname,
    }
  } = props;

  return (
    <Layout>
      <Head>
        <title>Personal</title>
      </Head>
      <Component
        {...pageProps}
        key={pathname}
      />
    </Layout>
  );
}
