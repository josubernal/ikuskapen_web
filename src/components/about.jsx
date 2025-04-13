import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src={`${process.env.PUBLIC_URL}/img/about.jpg`}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>¿Quiénes somos?</h2>
              <p>
                iKusKapen es una plataforma de acceso libre que facilita el
                registro, gestión y comunicación de los controles ambientales
                requeridos por las administraciones autonómicas a las empresas
                con requisitos impuestos en una autorización ambiental.
                <br />
                <br />
                iKusKapen nace como proyecto de innovación ex novo en el marco
                del trabajo de fin de Master en la modalidad de emprendimiento
                del Executive MBA de Deusto Business School.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
