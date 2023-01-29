import React, { memo } from "react";

import { css } from "@emotion/react";
import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Container, Header } from "semantic-ui-react";

export const getServerSideProps = async (): Promise<{ props: { data: string } }> => {
  return {
    props: {
      data: "hello",
    },
  };
};

export default memo<InferGetServerSidePropsType<typeof getServerSideProps>>(() => {
  return (
    <div>
      <Head>
        <title>Nest Next TODO Sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        css={css`
          padding-top: 20px;
          min-height: 100vh;
        `}
      >
        <Header.Content as="h1">Nest Next TODO Sample</Header.Content>
      </Container>
    </div>
  );
});
