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
            <i className={"fa fa-comments-o"}></i>
            <h3>Comunicación directa y efectiva con la administración</h3>
            <p>
              La plataforma facilita el intercambio de información en tiempo
              real con el órgano ambiental, permitiendo un seguimiento directo
              de las incidencias y la evolución de los registros.
            </p>
          </div>
          <div className="col-xs-6 col-md-4">
            <i className={"fa fa-group"}></i>
            <h3>Estandarización del reporte ambiental</h3>
            <p>
              La plataforma utiliza un formato digital estandarizado que
              simplifica la comunicación y el análisis de los datos.
            </p>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className={"fa fa-clock-o"}></i>
            <h3>Acceso en tiempo real</h3>
            <p>
              La plataforma incorpora un gemelo digital que permite a las
              empresas registrar y consultar los datos de control e inspección
              de sus instalaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
