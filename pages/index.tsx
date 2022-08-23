import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Navbar from '../components/Navbar'


import card1 from '../public/assets/logo.JPG'
import card2 from '../public/assets/card2.JPG'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Adobe: Creative, marketing and document management solution</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
        <Navbar />
        <Banner />
        <Card heading='Meet the new Photoshop.' text='Faster, smarter, and easier than ever.' link='Get to Know photoshop' image={card1}/>
        <Card heading='Adobe Express' text='Quickly and easily make standout content. No credit card required.' link='Get Adobe Express free' image={card2}/>
      
    </div>
  )
}

export default Home
