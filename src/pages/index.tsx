import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>5ire - Blockchain Meets Sustainability</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroSection />
    </>
  );
}
