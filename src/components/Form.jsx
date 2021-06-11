import React from "react";

const Form = () => {
  return (
    <div className="row justify-content-center">
      <div className="form-group col-5">
        <form>
          <input
            type="mail"
            placeholder="&#xf0e0;   Correo Electronico"
            className="form-control email mt-5"
          />
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input
            type="password"
            placeholder="Contraseña"
            className="form-control"
          />
          </div>
        </form>
        <button className="btn btn-sm btn-warning w-100 mt-3">Enviar</button>
      </div>
    </div>
  );
};

export default Form;
