import React from "react";

export const Alliances = () => {
  return (
    <div>
      <div id="alliances">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col text-center">
              <img
                src={`${process.env.PUBLIC_URL}/img/DBS-logo.png`}
                className="img-alliance"
                alt=""
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/Universidad_de_Deusto_logo.png`}
                className="img-alliance"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 Ikuskapen</p>
        </div>
      </div>
    </div>
  );
};
