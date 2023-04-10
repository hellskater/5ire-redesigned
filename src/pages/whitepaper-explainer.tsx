import WhitepaperExplainerComponent from "@/components/WhitepaperExplainer/WhitepaperExplainerComponent";
import Head from "next/head";

const WhitepaperExplainer = () => {
  return (
    <>
      <Head>
        <title>Whitepaper Explainer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <WhitepaperExplainerComponent />
    </>
  );
};

export default WhitepaperExplainer;
