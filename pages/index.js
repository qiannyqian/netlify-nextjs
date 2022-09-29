import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>qian.world</title>
        <link rel="icon" href="/hibiscus-favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to qian.world" />
        <p className="description">This is a WIP - check back soon!</p>
      </main>

      <Footer />
    </div>
  );
}
