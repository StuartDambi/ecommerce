import Head from 'next/head'
import { WelcomeBanner } from "../components";

const Home = () => {
  return (
      <div>
        <Head>
          <meta name='description' content='Elpasmi is a non Profit Organization aimed at distributing relief aid allover Africa' />
          <title>Elpasmi | Org</title>
        </Head>

          <WelcomeBanner />
      </div>
  )
}

export default Home;
