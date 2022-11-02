import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import jsonData from "../json/startuppario.json";

const ViewIdStartuppario = () => {
  const [stopLight, setStopLight] = useState(false);
  const router = useRouter();
  const { query } = useRouter();
  const checkElement = jsonData.find(
    (el) => el.title.replaceAll(" ", "-") === query.title
  );

  useEffect(() => {
    if (stopLight) {
      if (checkElement === undefined) router.push("/");
    } else setStopLight(true);
  }, [query.title]);

  return (
    <>
      <Head>
        <title>Startuppario {checkElement?.title}</title>
        <meta
          name="description"
          content="Startuppario: Il vocabolario delle startup"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <title>Startuppario: {checkElement?.title}</title>
        <meta
          content="Startuppario, il vocabolario delle startup. Impara tutti i termini chiave per fare bella figura e buoni affari nel mondo startup"
          name="description"
        />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="canonical"
          href="http://example.ampproject.org/article-metadata.html"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,900"
          rel="stylesheet"
        />
      </Head>
      <WrapperPage>
        <HomeButton>
          <LabelButton href={"/"}>Torna alla Home </LabelButton>
        </HomeButton>

        <Container>
          <h2>{checkElement?.title}</h2>
          <Description>{checkElement?.description}</Description>
        </Container>
      </WrapperPage>
    </>
  );
};

const Container = styled.div({
  padding: "0 100px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});
const WrapperPage = styled.div({
  padding: "20px",
});
const Description = styled.h3({});
const LabelButton = styled.a({
  textDecoration: "none",
  color: "whitesmoke",
  "&:hover": {
    color: "whitesmoke",
  },
});
const HomeButton = styled.button({
  textDecoration: "none",
  border: "1px solid black",
  background: "#b82335",
  padding: "10px",
  "&:hover": {
    background: "#cc5454",
    border: "1px solid black",
    boxShadow: "0px 0px 12px 0px #c22727",
  },
});

export default ViewIdStartuppario;
