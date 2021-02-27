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
import React from "react";
import { Button } from "../components/Button";
import { MenuBar } from "../components/MenuBar";

interface HomeProps {
  level: number;
  challengeCompleted: number;
  currentExperience: number;
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
        currentExperience={props.currentExperience}
      >
        <div className="grid h-screen grid-cols-1 bg-gray-100 dark:bg-trueGray-800 md:grid-cols-nlw">
          <div className="hidden h-full bg-white md:block">
            <MenuBar />
          </div>

          <div className="flex items-center justify-center h-full col-span-full md:col-span-1">
            
            <Container>
              <ExperienceBar />

              <CountdownProvider>
                <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 col-span-full">
                  <div className="flex flex-col justify-between col-span-full md:col-span-1">
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                    <Button />
                  </div>

                  <div className="hidden md:block sm:col-span-1">
                    <ChallengeBox />
                  </div>
                </section>
              </CountdownProvider>
            </Container>

          </div>
        </div>
      </ChallangeProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengeCompleted: Number(challengeCompleted ?? 0),
    },
  };
};
