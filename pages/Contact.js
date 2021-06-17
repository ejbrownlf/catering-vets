import Head from "next/head";
import styles from "../styles/Home.module.css";
import useWindowDimensions from "../src/hooks/windowSize";
import Navbar from "../src/components/navbar";
import Container from "../src/components/container600";

export default function Home() {
  const { width } = useWindowDimensions();
  const currentPage = "Contact";

  return (
    <div>
      <Head>
        <title>The Catering Vets</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossorigin="anonymous"
        ></script>
      </Head>

      <Navbar
        width={width}
        page={currentPage}
        links={["Home", "Menu", "About", "Contact"]}
      />

      <Container
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
          backgroundPositionX: "50%",
          backgroundPositionY: "50%",
          backgroundSize: "cover",
        }}
      >
        <h1>Make Your Event Memorable</h1>
        <h3>Hire the Catering Vets</h3>
      </Container>
      
      <footer className={styles.footer}>
        © Catering Vets, All Rights Reserved
      </footer>
    </div>
  );
}