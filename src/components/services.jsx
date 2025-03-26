import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Servicios</h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-4">
            <i className="fa fa-eye"></i>
            <div className="service-desc">
              <h3>Control y transparencia</h3>
              <p>
                La plataforma proporciona acceso en tiempo real a la información
                ambiental, lo que permite el control, facilita la transparencia
                y la trazabilidad del proceso.
              </p>
            </div>
          </div>
          <div className="col-xs-6 col-md-4">
            <i className="fa fa-bell-o"></i>
            <div className="service-desc">
              <h3>Alarmas automatizadas </h3>
              <p>
                La plataforma automatiza las alertas en caso de superar los
                valores límite de emisión, mejorando la seguridad ambiental y la
                eficiencia en la gestión.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <i className="fa fa-comment-o"></i>
            <div className="service-desc">
              <h3>Comunicación efectiva </h3>
              <p>
                La plataforma permite una comunicación digital fluida y
                estandarizada con el órgano ambiental, simplificando el
                intercambio de información y la coordinación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
