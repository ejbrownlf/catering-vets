import Head from "next/head";
import styles from "../styles/Home.module.css";
import useWindowDimensions from "../src/hooks/windowSize";
import Navbar from "../src/components/navbar";
import Container from "../src/components/container600";
import FoodItem from "../src/components/sections/foodItem";

export default function Home() {
  const { width } = useWindowDimensions();
  const currentPage = "Menu";

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
            "url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80)",
          backgroundPositionX: "50%",
          backgroundPositionY: "50%",
          backgroundSize: "cover",
          minHeight: "300px",
        }}
      >
        <h1>Take a look at our menu</h1>
      </Container>

      <FoodItem title={'Formal Buffet #1'} items={[
        {
          name: 'Roast Beef',
          price: 'Ham'
        },
        {
          name: 'Mashed Potatoes w/ Gravy',
          price: 'Green Beans'
        },
        {
          name: "Mac n' Cheese",
          price: 'Dinner Roll'
        }
      ]}/>
      
      <FoodItem title={'Formal Buffet #2'} items={[
         {
          name: 'Roast Beef',
          price: 'Ham'
        },
        {
          name: 'Mashed Potatoes w/ Gravy',
          price: 'Green Beans'
        },
        {
          name: "Mac n' Cheese",
          price: 'Dinner Roll'
        }

      ]}/>
      

      <footer className={styles.footer}>
        © Catering Vets, All Rights Reserved
      </footer>
    </div>
  );
}