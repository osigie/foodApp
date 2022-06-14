import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div >
      <div className={classes.footer}>
        <div className={classes["rows"]}>
          <div className={classes["child"]}>
            <h1 className={classes["about"]}>About Us</h1>
            <div className={classes["children"]}>
              <Link className={classes["nav-link"]} to="#">
                Aim
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Vison
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Testimonials
              </Link>
            </div>
          </div>
          <div className={classes["child"]}>
            <h1>Services</h1>
            <div className={classes["children"]}>
              <Link className={classes["nav-link"]} to="#">
                African food
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Intercontinental dishes
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Catering
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Party decoration
              </Link>
            </div>
          </div>
          <div className={classes["child"]}>
            <h1>Contact Us</h1>
            <div className={classes["children"]}>
              <Link className={classes["nav-link"]} to="#">
                Lagos
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Enugu
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Ibadan
              </Link>
              <Link className={classes["nav-link"]} to="#">
                Kano
              </Link>
            </div>
          </div>
          <div className={classes["child"]}>
            <h1>Social Media</h1>
            <div className={classes["children"]}>
              <Link className={classes["nav-link"]} to="#">
                <i className={classes["fab fa-facebook"]}>
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </Link>
              <Link className={classes["nav-link"]} to="#">
                <i className={classes["fab fa-instagram"]}>
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </Link>
              <Link className={classes["nav-link"]} to="#">
                <i className={classes["fab fa-twitter"]}>
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </Link>
              <Link className={classes["nav-link"]} to="#">
                <i className={classes["fab fa-youtube"]}>
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
