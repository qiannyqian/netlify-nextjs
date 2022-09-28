import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>qian.world</title>
        <link rel="icon" href="/hibiscus-favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to qian.world" />
        <p className="description">
          This is a WIP - check back soon!
          <br />
          <Link href="/about">About</Link>
          <br />
          <a href="https://blog.qian.world/" target="_blank">
            Blog
          </a>
          <br />
          <Link href="/contact">Contact</Link>
        </p>
      </main>

      <Footer />
    </div>
  );
}
