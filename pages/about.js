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

        <div>
          <p>
            Hi, my name is Hui Qian, and I am a software engineer who
            specialises in front-end.
          </p>

          <br />

          <p>
            I have been in the tech industry since 2018, after completing a
            coding bootcamp (NEXT Academy in Kuala Lumpur in Full Stack Web
            Development). I was previously a Psychology graduate from the
            University of Sheffield who was working in digital marketing and
            community management, but after having enjoyed the way how words
            could make beautiful user interfaces, I decided to switch tracks and
            careers.
          </p>

          <br />

          <p>
            Since then, I have worked with HTML, CSS and Javascript, as well as
            Laravel with PHP, React with TypeScript and Ruby on Rails.
          </p>

          <br />

          <p>
            I am currently based in Montreal, Canada, and I have previously
            worked in Malaysia and Singapore.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
