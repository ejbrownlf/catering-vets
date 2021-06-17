import styles from "../../../styles/Home.module.css";
import Container from "../container600";

export default function FoodItem({title, items}) {
  return (
    <div>
      <Container style={{ minHeight: "90px"}}>
        <div
          className="row"
          style={{ width: "100%", margin: "auto", maxWidth: "1400px" }}
        >
          <div className="col-lg-1"></div>
          <div
            className="col-lg-10"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{title}</p>
          </div>
          

          <div className="col-lg-1"></div>
        </div>
      </Container>

      {
          items.map((item, idx) => (
            <Container style={{ minHeight: "30px" }}>
            <div
              className="row"
              style={{ width: "100%", margin: "auto", maxWidth: "1400px" }}
            >
              <div className="col-lg-2"></div>
              <div
                className="col-lg-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{fontSize: '1.4rem', margin: 0}}>
                  {item.name}
                </p>
              </div>
              <div
                className="col-lg-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p style={{fontSize: '1.4rem', margin: 0}}>
                  {item.price}
                </p>
              </div>
    
              <div className="col-lg-2"></div>
            </div>
          </Container>

          ))
      }

      <Container style={{ minHeight: '40px' }}/>

    </div>
  );
}
