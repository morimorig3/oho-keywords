import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import { Layout } from "../src/layout";
import { Chronology } from "../src/chronology";
import { GAS_KEYWORDS_API } from "../src/constants";
import { Data } from "../src/data";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>101のキーワード年表</title>
        <meta name="description" content="101のキーワード" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout data={data}>
        <Chronology data={data} />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data: Data = await fetch(GAS_KEYWORDS_API).then((res) => res.json());

  return {
    props: { data },
  };
};
