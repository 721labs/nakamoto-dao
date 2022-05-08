// Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>NakamotoDAO</h1>
      <p>
        Too many DAOs waste your attention and capital because they're
        decentralized in name alone.
      </p>
      <p>
        We index DAOs'{" "}
        <a
          href="https://twitter.com/balajis/status/1334388563832496130?lang=en"
          target="_blank"
        >
          Nakamoto coefficient
        </a>{" "}
        in order to fight sleek marketing, diminish FOMO, and provide
        transparency to Web3.
      </p>
      <p>To join us, sign below.</p>

      <footer>
        <a href="https://twitter.com/nakamotodao">Twitter</a>
      </footer>
    </div>
  );
};

export default Home;
