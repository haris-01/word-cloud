import Head from "next/head";
import HomePage from "@pageComponents/HomePage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Word Cloud</title>
        <meta name="description" content="Word Cloud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default Home;

// export const getServerSideProps = async ({ params }) => {
//   const { data } = await apolloClient.query({
//     query: EXAMPLE_QUERY,
//     variables: { hash: params.hash },
//   });

//   return {
//     props: {
//       hash: params.hash,
//       data,
//     },
//   };
// };
