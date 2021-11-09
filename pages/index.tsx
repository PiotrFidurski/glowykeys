import Navbar from '@components/Navbar/Navbar';
import type { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => (
  <div>
    <Head>
      <title>Find the best keyboards</title>
      <meta name="description" content="shop for the best keyboards around" />
    </Head>
    <Navbar />
    Hello, Almost before we knew it, we had left the ground.
  </div>
);

export default HomePage;
