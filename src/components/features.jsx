import React from "react";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>¿Qué ofrecemos?</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4">
            <i className={"fa fa-tachometer"}></i>
            <h3>Cuadro de mando ambiental</h3>
            <p>
              El usuario dispone de acceso en tiempo real al desempeño ambiental
              de su actividad. La plataforma incorpora un gemelo digital donde
              se registran los controles y la inspección de sus instalaciones.
              Todo en un mismo sitio, accesible, ordenado y digitalizado.
            </p>
          </div>
          <div className="col-xs-6 col-md-4">
            <i className={"fa fa-comments-o"}></i>
            <h3>Comunicación con la administración</h3>
            <p>
              La plataforma facilita el intercambio de información con el órgano
              ambiental, permitiendo la comunicación en tiempo real de
              incidencias, y los resultados del Plan de Vigilancia Ambiental en
              un formato estándar bajo norma UNE-EN ISO/IEC 17020.
            </p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className={"fa fa-bar-chart"}></i>
            <h3>Prevención y evaluación de riesgos</h3>
            <p>
              iKusKapen dispone de un sistema automático 24/7 de alarma ante la
              superación de los VLE, y funciones avanzadas que permiten evaluar
              el riesgo y generar modelos predictivos frente a diversos
              escenarios, con asistencia de IA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
