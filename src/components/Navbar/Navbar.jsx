import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const closeNavbar = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 300);
  };

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
     ${isOpen ? "open" : "close"}`}
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent1">
      <button
        className="navbar-toggler"
        type="button"
        onClick={closeNavbar}
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>

      <div
        className={`collapse navbar-collapse ${isOpen ? "open" : "close"}`}
        id="navbarSupportedContent"
      >
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
              Sponsers
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
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
