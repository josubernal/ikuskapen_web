import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Características técnicas</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <i className="fa fa-tachometer"></i>
            <div className="service-desc">
              <h3>Cuadro de mando ambiental</h3>
              <p>
                Visualización geolocalizada de todos los puntos de control
                mediante etiquetas, de acceso inmediato, en tiempo real.
                Integración de dispositivos IoT.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-folder-open"></i>
            <div className="service-desc">
              <h3>
                Registro y almacenamiento de los controles en formato digital
              </h3>
              <p>Tratamiento, gestión, y explotación del dato.</p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-eye"></i>
            <div className="service-desc">
              <h3>Programa de Vigilancia Ambiental</h3>
              <p>
                Generación del entregable del Programa de Vigilancia Ambiental
                (PVA) y comunicación mediante API en el aplicativo del órgano
                ambiental.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-magic"></i>
            <div className="service-desc">
              <h3>Generación automática de informes</h3>
              <p>
                Generación automática de informes de actualización de controles,
                comunicación de incidencias, y tratamiento de desviaciones.
                Integración mediante API en el aplicativo del órgano ambiental
                (Ingurumena).
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-bell-o"></i>
            <div className="service-desc">
              <h3>Alarmas automatizadas y transparencia. </h3>
              <p>
                Sistema automático 24/7 de comunicación y alarma ante la
                superación de los valores límite de emisión (VLE).
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <i className="fa fa-exclamation-triangle"></i>
            <div className="service-desc">
              <h3>Evaluación de conformidad</h3>
              <p>
              Identificación de incumplimientos y niveles de 
              intervención. Tratamiento estadístico, detección de outlayers.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <i className="fa fa-bar-chart"></i>
            <div className="service-desc">
              <h3>Analisis e inferencia</h3>
              <p>
                Análisis de sensibilidad y modelización predictiva ante diversos
                escenarios (condiciones de explotación distintas a las
                normales), asistida por IA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
