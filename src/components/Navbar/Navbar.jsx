import React, { useEffect, useState } from "react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.backgroundColor =
        "rgba(0, 0, 0, 0.3)";
      document.getElementById("navbar").style.backdropFilter = "blur(12px)";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.backdropFilter = "blur(12px)";
    }
  }

  return (
    <nav
      id="navbar"
      className={`navbar fixed-top navbar-collapse navbar-expand-md navbar-custom navbar-light"
     ${isOpen ? "open" : ""}`}>

      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#main-landing">
              Home
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#aboutp">
              About Us
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#sponsorsp">
              Sponsors
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#timelinep">
              Workshops
            </a>
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="#teamp">
              Team
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
