import Vision from "@/components/About/Vision";
import WhoAreWe from "@/components/About/WhoAreWe";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <WhoAreWe />
      <Vision />
    </>
  );
};

export default About;
