import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>qian.world - Contact</title>
        <link rel="icon" href="/hibiscus-favicon.ico" />
      </Head>

      <main>
        <Header title="Contact" />

        <p className="description">This is the contact page</p>
      </main>

      <Footer />
    </div>
  );
}
