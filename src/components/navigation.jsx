import React, { useState, useEffect } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      if (window.innerWidth >= 1200) {
        setIsOpen(false); // Ensure the menu is always open on large screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          {isMobile && (
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          )}
          <a className="navbar-brand page-scroll" href="#header">
            <img src={`${process.env.PUBLIC_URL}/img/logo.png`}  className="logo" alt="Logo" />
          </a>
        </div>

        <div className={`navbar-collapse ${isOpen ? "in" : "collapse"}`}>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                ¿Qué ofrecemos?
              </a>
            </li>
            <li>
              <a href="#focus" className="page-scroll">
                ¿Cómo lo vamos a hacer?
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Características técnicas
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contactanos
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                ¿Quiénes somos?
              </a>
            </li>
            <li>
              <a href="#why" className="page-scroll">
                ¿Por qué elegirnos?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
