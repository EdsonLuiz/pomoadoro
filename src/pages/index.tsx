// import Head from 'next/head'

import Head from "next/head";
import { GetServerSideProps } from "next";

import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Container } from "../components/Container";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountdownContext, CountdownProvider } from "../contexts/CountdownContext";
import { ChallangeProvider } from "../contexts/ChallengesContext";
import React, { useContext } from "react";
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
                  <ContentContainer>
                    <Profile />
                    <CompletedChallenges />
                    <Countdown />
                    <Button />
                  </ContentContainer>

                  <ChallengeBoxContainer>
                    <ChallengeBox />
                  </ChallengeBoxContainer>

                </section>
              </CountdownProvider>
            </Container>

          </div>
        </div>
      </ChallangeProvider>
    </>
  );
}

function ChallengeBoxContainer({children}) {
  const {hasFinished} = useContext(CountdownContext)

  return (
    <div className={` ${hasFinished ? 'block' : 'hidden' }  md:block md:col-span-1`}>
      {children}
    </div>
  )
}

function ContentContainer({children}) {
  const {hasFinished} = useContext(CountdownContext)

  return (
    <div className={` ${hasFinished ? 'hidden' : 'flex' } md:flex flex-col justify-between col-span-full md:col-span-1`}>
      {children}
    </div>
  )
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
