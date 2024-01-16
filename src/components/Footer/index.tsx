import React from "react";

const Footer = () => {
  return (
      <footer className="footer">
          <div className="layout">
              <h3 className="grid-lg-start-1 grid-lg-end-7 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 h3 title">
                © 2023 Danilo Andrade. All rights reserved.
              </h3>
              <div className="grid-lg-start-7 grid-lg-end-13 grid-md-start-1 grid-md-end-7 grid-sm-start-1 grid-sm-end-5 contacts">
                  <h3 className="h3 title">For more projects</h3>
                  <a
                      className="h3 link"
                      href="https://danilo-m-andrade.vercel.app/"
                  >
                      Check out my portfolio
                  </a>
              </div>
          </div>
      </footer>
  )
};

export default Footer;
