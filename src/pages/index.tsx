// Types
import type { NextPage } from "next";

const Home: NextPage = () => {
  const tweet = () => {
    window.open(`https://twitter.com/intent/tweet?text=@NakamotoDAO`, "_blank");
  };

  return (
    <div>
      <h1>NakamotoDAO</h1>
      <p>
        Too many DAOs waste your attention and capital because they&apos;re
        decentralized in name alone.
      </p>
      <p>
        We index DAOs&apos;{" "}
        <a
          href="https://twitter.com/balajis/status/1334388563832496130?lang=en"
          target="_blank"
          rel="noreferrer"
        >
          Nakamoto coefficient
        </a>{" "}
        in order to fight sleek marketing, diminish FOMO, and provide
        transparency to Web3.
      </p>
      <p>To join us, tweet @NakamotoDAO.</p>
      <button onClick={tweet}>Tweet</button>

      <footer>
        <a href="https://twitter.com/nakamotodao">Twitter</a>
      </footer>
    </div>
  );
};

export default Home;
