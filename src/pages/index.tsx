import BlogCarousel from "@/components/BlogCarousel/BlogCarousel";
import BuildToEarn from "@/components/LandingPage/BuildToEarn/BuildToEarn";
import HeroSection from "@/components/LandingPage/HeroSection/HeroSection";
import MidSection from "@/components/LandingPage/MidSection/MidSection";
import Sustainability from "@/components/LandingPage/Sustainability/Sustainability";
import WhitepaperExplainer from "@/components/LandingPage/WhitepaperExplainer/WhitepaperExplainer";
import NftShowCase from "@/components/NftShowCase/NftShowCase";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Head>
        <title>5ire - Blockchain Meets Sustainability</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HeroSection />
      <WhitepaperExplainer />
      <Sustainability />
      <BuildToEarn />
      <MidSection />
      {isDesktop && <NftShowCase />}
      <BlogCarousel />
    </>
  );
}
