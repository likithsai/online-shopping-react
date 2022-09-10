import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    fetch('/api').then(response => response.json()).then(data => console.log(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>Server ready</h1>
      </main>
    </div>
  )
}
