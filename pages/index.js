import Head from 'next/head';
import Image from 'next/image';
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
        <img
          src="/bnw_pfp_qiannyqian.jpeg"
          alt="Picture of author, qiannyqian"
          className="profile_picture"
        />
        <div className="text-block">
          Hey, it's Qian here! You might know me as <b>qiannyqian</b> on social
          media :) Welcome to my little space on the web!
        </div>
      </main>

      <Footer />
    </div>
  );
}
