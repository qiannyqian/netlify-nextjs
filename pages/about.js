import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>qian.world - About</title>
        <link rel="icon" href="/hibiscus-favicon.ico" />
      </Head>

      <main>
        <Header title="About" />

        <p className="description">This is the about page</p>
      </main>

      <Footer />
    </div>
  );
}
