import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Global";
import Theme from "../styles/Theme";

const Home = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Head>
      <title>Vector Finance</title>
    </Head>
    <h4>Vector Finance</h4>
  </ThemeProvider>
);

export default Home;
