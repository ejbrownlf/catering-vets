import styles from "../../styles/Home.module.css";
import { FaBars, FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Navbar = ({ page, links, width }) => {
  return width > 800 || "" ? (
    <div className={styles.nav}>
      <div
        className="row"
        stylw={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          className="col-md-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <a href="/">
            <img
              src="/images/logo.png"
              style={{ height: "120px", borderRadius: "5px" }}
            ></img>
          </a>
        </div>
        <div
          className="col-md-6"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {links.map((link, idx) =>
            link === page ? (
              <a
                href={`/${link}`}
                key={idx}
                style={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {link}
              </a>
            ) : (
              <a href={`/${link}`} key={idx}>
                {link}
              </a>
            )
          )}
        </div>
        <div
          className="col-md-3"
          style={{ display: "flex", justifyContent: "center" }}
        ></div>
      </div>
    </div>
  ) : (
    <div className={styles.mobileNav}>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
        style={{ marginRight: "auto" }}
      >
        <FaBars size={32} />
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
        style={{ height: "50vh", backgroundColor: "#e6e6e6", color: "#395c00" }}
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel"></h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Gallery">
                Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
