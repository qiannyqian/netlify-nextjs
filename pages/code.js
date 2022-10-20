import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>qian.world - Code</title>
      </Head>

      <main>
        <Header title="Code" />

        <div className="text-block">
          <h3>2022</h3>
          <p>To be added!</p>
          <br />
          <h3>2020</h3>
          <p>
            <a
              href="https://seasons-greetings-holla.netlify.com/"
              target="_blank"
              className="linkout"
            >
              Seasons App
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/qiannyqian/react-seasons-app"
              target="_blank"
              className="linkout"
            >
              Github
            </a>
          </p>
          <p>
            Mini seasons app that shows different UI and text based on current
            detected latitude and month. Tools: CRA, Netlify.
          </p>

          <br />
          <p>
            <a
              href="https://pics-app-amaze.netlify.com/"
              target="_blank"
              className="linkout"
            >
              Picture App
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/qiannyqian/react-pics-app"
              target="_blank"
              className="linkout"
            >
              Github
            </a>
          </p>
          <p>
            Project involving getting images using Unsplash API using search
            terms, and tiling search results nicely using CSS grid and
            components. Tools: CRA, Unsplash API, Netlify.
          </p>

          <br />
          <p>
            <a
              href="https://videos-app-wow.netlify.com/"
              target="_blank"
              className="linkout"
            >
              Videos App
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/qiannyqian/react-videos-app"
              target="_blank"
              className="linkout"
            >
              Github
            </a>
          </p>
          <p>
            Project utilising Youtube API to search for videos and display
            search terms + display selected embedded video. Tools: CRA, Youtube
            API, Netlify
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
