// import Head from 'next/head'

import { ExperienceBar } from "../components/ExperienceBar";


export default function Home() {
  return (
      // {/* <Head>
      //   <title>Create Next App</title>
      //   <link rel="icon" href="/favicon.ico" />
      // </Head> */}
      <div className="container flex flex-col h-screen px-8 py-10 mx-auto">
        <ExperienceBar />
      </div>

  )
}
