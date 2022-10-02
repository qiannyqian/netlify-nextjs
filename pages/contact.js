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

        <div>
          <p>
            You can always find me on{' '}
            <a href="https://twitter.com/qiannyqian" className="linkout">
              Twitter
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/huiqianliang/"
              className="linkout"
            >
              LinkedIn
            </a>
          </p>

          <br />

          <p>
            However, should you need to contact me directly, you can always{' '}
            <a href="mailto:liang.huiqian@gmail.com" className="linkout">
              drop me an email
            </a>
            !
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
