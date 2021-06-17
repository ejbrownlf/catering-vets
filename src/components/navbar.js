import styles from "../../styles/Home.module.css";
import { FaBars } from "react-icons/fa";

const Navbar = ({ page, links, width }) => {
  return (
    
      width > 800 ? (
        <div className={styles.nav}>
          {links.map((link, idx) =>
            link === page ? (
              <a
                href={`/${link}`}
                key={idx}
                style={{  textDecoration: "underline", color: 'black' }}
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
      ) : (
        <div className={styles.mobileNav}>
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <FaBars size={32} />
          </button>

          <div
            className="offcanvas offcanvas-top"
            tabindex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
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
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
   
  );
};

export default Navbar;
