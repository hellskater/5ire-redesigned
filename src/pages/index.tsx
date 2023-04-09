import BlogCarousel from "@/components/BlogCarousel/BlogCarousel";
import BuildToEarn from "@/components/LandingPage/BuildToEarn/BuildToEarn";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import MidSection from "@/components/LandingPage/MidSection/MidSection";
import Sustainability from "@/components/LandingPage/Sustainability/Sustainability";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>5ire - Blockchain Meets Sustainability</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroSection />
      <Sustainability />
      <BuildToEarn />
      <MidSection />
      <BlogCarousel />
    </>
  );
}
