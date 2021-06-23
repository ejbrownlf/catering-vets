import styles from "../../../styles/Home.module.css";
import Container from "../container600";
import Image from "next/image";

export default function GaleryItem({item, idx}) {
  return (

    <s style={{margin:"10px"}}>
      <Image 
        src={`/images/${item}`}
        key={idx}
        width={350}
        height={350}
        style={{margin: "20px"}}
      />

    </s>
  );
}
