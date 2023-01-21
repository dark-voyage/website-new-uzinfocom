import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Head>
        <title>Uzinfocom Open Source - O&#39;zbek Open Source rivojlantiruvchi hamjamiyat</title>
        <meta
          name="description"
          content="Uzinfocom Open Source bu Uzinfocom kompaniyasi tomonidan tashkil etilgan va o'zbek dasturchilaridan tashkil topgan Open Source rivojlantiruvchi hamjamiyat."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
