import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Header from './components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    {<Banner />}
    
    <Cards />
      
    </div>
  )
}

export default Home
