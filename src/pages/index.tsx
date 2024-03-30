import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Features from "@site/src/components/Features";
import Heading from "@theme/Heading";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import useWindowDimensions from "../util/windowDimensions";

import Banner from "@site/static/img/banner.svg";

import styles from "./index.module.css";

function Header() {
  const { width } = useWindowDimensions();
  const { siteConfig } = useDocusaurusContext();

  let player: ReactPlayer;

  function onProgress(state: OnProgressProps) {
    if (state.playedSeconds >= 73) {
      player.seekTo(0);
    }
  }

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.dimmer} />

      <ReactPlayer
        className={styles.player}
        ref={(ref) => (player = ref)}
        url={"https://www.youtube.com/watch?v=eAvXhNlO-rA"}
        playing={true}
        muted={true}
        loop={true}
        width={width}
        height={width * 2}
        onProgress={onProgress}
      />

      <div className={clsx("container", styles.container)}>
        <Heading as="h1" className="hero__title">
          <Banner className={styles.banner} height={128} />
        </Heading>

        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Learn
          </Link>

          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.download
            )}
            to="https://github.com/argon-rbx/argon/releases/latest"
          >
            Download
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Argon - full featured tool for Roblox development"
    >
      <Header />

      <main>
        <Features />
      </main>
    </Layout>
  );
}
