import React from "react";

export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>¿Quiénes somos?</h2>
              <p>
                iKusKapen es una plataforma digital que facilita el registro y
                gestión de los controles ambientales requeridos por las
                administraciones autonómicas a las empresas con infraestructuras
                que tienen efectos potencialmente contaminantes sobre el medio
                ambiente.{" "}
              </p>
              <h3>¿Por qué elegirnos?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Más de 30 años de experiencia en el sector.</li>
                    <li>
                      Adaptados a las nuevas técnologias de analisis de datos.
                    </li>
                    <li>Aplicación sin curva de aprendizaje.</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>Adaptabilidad a infraestructuras IPPC y no IPPC.</li>
                    <li>
                      Control de emisiones y otras autorizaciones en una sola
                      herramienta.
                    </li>
                    <li>Estandarización y trazabilidad.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
