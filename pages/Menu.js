import Head from "next/head";
import styles from "../styles/Home.module.css";
import useWindowDimensions from "../src/hooks/windowSize";
import Container from "../src/components/container600";
import FoodItem from "../src/components/sections/foodItem";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import("../src/components/navbar"),
  { ssr: false }
)

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

      <DynamicComponentWithNoSSR
        width={width}
        page={currentPage}
        links={["Home", "Menu", "Gallery"]}
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

      <FoodItem title={'Meats'} items={[
        {
          name: 'Pulled Pork',
          price: 'Pulled Chicken'
        },
        {
          name: 'Ribs',
          price: ''
        }
      ]}/>
      
      <FoodItem title={'Sides'} items={[
        {
          name: "Mac N Cheese w/ bacon",
          price: "Mac N Cheese w/ out meat"
        },
        {
          name: 'Baked Beans w/ pulled pork',
          price: 'Baked Beans w/ brisket'
        },
        {
          name: 'Baked Beans w/out meat',
          price: 'Cole Slaw'
        },
        {
          name: 'Potato Salad',
          price: 'Dinner Rolls'
        },
        {
          name: 'Buns',
          price: 'Salad'
        }
       
      ]}/>
      

      <footer className={styles.footer}>
        ?? Catering Vets, All Rights Reserved
      </footer>
    </div>
  );
}
