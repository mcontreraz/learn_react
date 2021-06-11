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
          <input
            type="password"
            placeholder="&#xf0e7;   Password"
            className="form-control email mt-3"
          />
        </form>
        <button className="btn btn-sm btn-warning w-100 mt-3">Enviar</button>
      </div>
    </div>
  );
};

export default Form;
