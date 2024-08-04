import React from "react";
import { Helmet } from "react-helmet";
import SubHeader from "../components/SubHeader";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pb-16 min-h-screen text-white">
      <SubHeader />
      <Helmet>
        <title>About Us- Mega Base Lotto</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-purple-400 py-5">
            About Us
          </h1>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            What is Mega Base Lotto?
          </h2>
          <p className="text-lg text-gray-300">
            Mega Base Lotto is a unique and exciting memecoin lottery game where
            you can buy, hold, and sell tokens while having the chance to win
            the big prize! Built on the Ethereum blockchain, our game combines
            the fun of lottery gaming with the thrill of cryptocurrency.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Buying Tokens</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Purchase:</strong> Use ETH to buy Mega Base Lotto
                  tokens. A 19% tax is applied to each purchase.
                </li>
                <li>
                  <strong>Minting:</strong> The remaining amount after tax and a
                  1% development fee is converted into tokens and added to your
                  balance.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Selling Tokens</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Sell:</strong> You can sell your Mega Base Lotto
                  tokens at any time. A 19% tax is applied to the sale, along
                  with a 1% development fee.
                </li>
                <li>
                  <strong>Payout:</strong> The remaining amount after taxes and
                  fees is sent to your wallet.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Weekly Lottery</h3>
              <ul className="list-disc pl-5">
                <li>
                  <strong>Tax Collection:</strong> The 19% tax collected from
                  all transactions is pooled into the prize wallet.
                </li>
                <li>
                  <strong>Random Winner:</strong> Every 7 days, our smart
                  contract automatically selects a random winner from the token
                  holders.
                </li>
                <li>
                  <strong>Prize Distribution:</strong> The winner receives the
                  total tax collected over the week automatically transferred by
                  the Smart Contract. Funds cannot be manually transferred.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>High Rewards:</strong> 19% of all transaction values are
              pooled and distributed as the weekly prize to one lucky winner!
            </li>
            <li>
              <strong>Decentralized & Secure:</strong> Built on the Ethereum
              blockchain, ensuring transparency and security.
            </li>
            <li>
              <strong>Community Driven:</strong> Engage with our vibrant
              community on social media and participate in fun events and
              contests.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Mega Base Lotto?
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Transparency:</strong> Our smart contract is fully audited
              to ensure fairness and security. Contract is locked.
            </li>
            <li>
              <strong>Fair Play:</strong> Winners are selected randomly using
              Chainlink VRF (Verifiable Random Function), ensuring true
              randomness.
            </li>
            <li>
              <strong>Engaging Experience:</strong> Enjoy the thrill of
              potentially winning big prizes while being part of a fun and
              engaging community.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How to Get Started</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Connect Wallet:</strong> Connect your Ethereum wallet to
              our platform.
            </li>
            <li>
              <strong>Buy Tokens:</strong> Purchase Mega Base Lotto tokens using
              ETH.
            </li>
            <li>
              <strong>Participate:</strong> Hold your tokens, participate in the
              community, and wait for the weekly lottery draw. The more tokens
              you hold the higher your probability is being randomly selected by
              the contract!
            </li>
            <li>
              <strong>Win Prizes:</strong> Check every week to see if you’re the
              lucky winner! Winner wins the entire prize pool!
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-300">
            Follow us on social media for the latest updates, contests, and
            announcements:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Twitter: (ill give you later)</li>
            <li>Telegram: (ill give you later)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
