// import Head from 'next/head'

import Head  from "next/head";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Container } from "../components/Container";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ModeSwitch } from "../components/ModeSwitch";
import { Profile } from "../components/Profile";


export default function Home() {
  return (
    <>
      
      <Head>
        <title>Início | pomo[A]doro</title>
      </Head>
      <Container>
        <ModeSwitch />
        <ExperienceBar />

        <section className="grid flex-1 grid-cols-1 gap-24 sm:grid-cols-2 col-span-full">
          <div className="col-span-full sm:col-span-1">
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div className="hidden sm:col-span-1"></div>
        </section>
      </Container>
    </>
  );
}
