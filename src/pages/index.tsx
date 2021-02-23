// import Head from 'next/head'

import Head  from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Container } from "../components/Container";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";


export default function Home() {
  return (
      <Container>
        <Head>
          <title>Início | pomo[A]doro</title>
        </Head>
        <ExperienceBar />

        <section className="grid content-center flex-1 grid-cols-2 gap-24">
          <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
          </div>

          <div></div>
        </section>

      </Container>

  )
}
