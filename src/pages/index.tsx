// import Head from 'next/head'

import Head from "next/head";
import { GetServerSideProps } from "next";

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Container } from "../components/Container";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ModeSwitch } from "../components/ModeSwitch";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallangeProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number,
  challengeCompleted: number,
  currentExperience: number
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Início | pomo[A]doro</title>
      </Head>
      <ChallangeProvider 
        level={props.level} 
        challengeCompleted={props.challengeCompleted}
        currentExperience={props.currentExperience}  >
        <Container>
          <ModeSwitch />
          <ExperienceBar />

          <CountdownProvider>
            <section className="grid flex-1 grid-cols-1 gap-24 sm:grid-cols-2 col-span-full">
              <div className="col-span-full sm:col-span-1">
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>

              <div className="invisible sm:visible sm:col-span-1">
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </Container>
      </ChallangeProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: { 
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengeCompleted: Number(challengeCompleted) 
    },
  };
};
