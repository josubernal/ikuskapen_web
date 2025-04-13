import React from "react";

export const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contáctanos</h2>
                <p>
                  Rellena el siguiente formulario para estar informado de las
                  últimas actualizaciones del proyecto, formar parte de la
                  comunidad de Ikuskapen y ser uno de los primeros en
                  beneficiarte de los beneficios de la plataforma.
                </p>
              </div>
              <div id="success"></div>
              <button className="btn btn-custom btn-lg">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbVdd5lvhhj7ngHbRGnnGSwESyQeQg2MpxhSTGyjD0zTAvEA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",  // Removes underline
                    color: "inherit",        // Inherits parent's text color
                  }}
                >
                  ACCEDER AL FORMULARIO
                </a>
              </button>
            </div>
          </div>
          <div className="col-lg-auto col-md-3 col-md-offset-1">
            <div className="row">
              <h3>Información de contacto</h3>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Localización
                  </span>
                  Deusto Business School <br />
                  Universidad de Deusto - Deustuko Univertsitatea <br />
                  Bilbao, Bizkaia.
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>
                  guille.bernal@opendeusto.es
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
