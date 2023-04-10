import { useMediaQuery } from "@mantine/hooks";
import { Indie_Flower } from "next/font/google";
import HandwrittenNumber from "../Handwritten/HandwrittenNumber";
const indie = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

const WhitepaperExplainerComponent = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div>
      {isDesktop && (
        <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-r rounded-full -rotate-2 from-blue-500 to-blue-600 z-[-2]"></div>
      )}

      <section className="mt-28 p-5 md:p-10 font-mono">
        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff]">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={1}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            5ire is a blockchain platform that aims to introduce a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Post-quantum_cryptography"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 underline underline-offset-4"
            >
              quantum safe protocol
            </a>{" "}
            for its public key cryptography to keep financial and personal data
            safe from cyber attacks in the age of quantum computers. Elliptic
            curve digital signature algorithm (ECDSA), which is used in
            blockchain for wallet addresses, signing transactions, and
            validating new blocks, is based on a mathematical problem called the
            discrete logarithm problem (DLP). It is believed that quantum
            computers will be able to solve DLP in the future, making ECDSA
            vulnerable to quantum attacks.
          </p>
        </div>

        <div className="md:h-[40rem] h-[30rem] md:mt-10">
          <img
            src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2015/09/CryptographyChart.png"
            alt="qantum safe cryptography"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={2}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            According to a study done by Microsoft, a quantum computer would
            require 2330 logical qubits to be able to solve the elliptic curve
            discrete logarithm problem (ECDLP).{" "}
            <a
              href="https://en.wikipedia.org/wiki/Peter_Shor"
              target="_blank"
              rel="noreferrer"
              className="text-green-500 underline underline-offset-4"
            >
              Peter Shor
            </a>{" "}
            presented two polynomial time quantum algorithms for integer
            factorization and discrete logarithm in the finite field of prime
            order, which can break all existing public key cryptosystems using
            his proposed algorithms.
          </p>
        </div>

        <div className="md:h-[30rem] h-[20rem] md:mt-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*VU9t3iZety2CFIRh-bqLEQ.jpeg"
            alt="peter shor"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={3}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            ProofID is an identity system built on a blockchain-based
            Self-Sovereign Security Model and Unique Digital Credentials using
            NFTs that aims to return ownership and control of identity data to
            the individual while providing tangible utility for the ProofID
            token through real-world products and services.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={4}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            ProofID overcomes the limitations of centralized identity systems,
            helps achieve compliance with the most comprehensive national data
            protection laws and KYC regulations, and returns ownership and
            control of identity data to the individual.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={5}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            To use ProofID, a user needs to download the ProofID Wallet program
            on their personal device, which contains a public/private key pair
            (ProofID) that serves as the user&rsquo;s digital signature for
            identity verification.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={6}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            ProofID users can make identity claims, such as nationality, date of
            birth, occupation, etc., and get them attested by verifiers or
            appropriate authorities such as notaries, government agencies,
            banks, hospitals, driving license authorities, and immigration.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={7}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            The number of different types of identity claims that may be
            verified is practically limitless, and the owner of the
            identification will be able to pick which information to share with
            any reliant party.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={8}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            5irechain aims to create a sustainable blockchain network that uses
            less energy and is more environmentally friendly than traditional
            proof-of-work (PoW) blockchains.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={9}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            The 5irechain network will use a proof-of-stake (PoS) consensus
            mechanism, which requires significantly less energy compared to PoW.
            The PoS consensus mechanism also allows for a higher transaction
            throughput, which will enable more efficient and scalable use cases.
          </p>
        </div>

        <div className="flex gap-5 md:text-xl text-sm text-[#7038ff] md:mt-20 mt-10">
          {isDesktop && (
            <div className="w-[10%] -mt-2">
              <HandwrittenNumber
                number={10}
                text="text-black"
                size={isDesktop ? "large" : "small"}
              />
            </div>
          )}

          <p>
            The 5irechain team is committed to using renewable energy sources to
            power their network and infrastructure. The 5irechain network will
            have a low carbon footprint, making it a more sustainable and
            responsible choice for businesses and individuals alike. By using a
            more sustainable blockchain network, 5irechain aims to contribute to
            the global effort to reduce carbon emissions and combat climate
            change.
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhitepaperExplainerComponent;
