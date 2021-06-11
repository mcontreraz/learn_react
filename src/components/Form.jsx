import { Component } from "react";

// const Form = (props) => (
//     <div className="col-6">
//         Hola {props.name}
//     </div>
// )
export default class Form extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-4">
            <label>{this.props.input1}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={"Ingrese " + this.props.input1 + "..."}
              />
            </div>
          </div>

          <div className="col-4">
            <label>{this.props.input2}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={"Ingrese " + this.props.input2 + "..."}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <label>{this.props.input3}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={"Ingrese " + this.props.input3 + "..."}
              />
            </div>
          </div>

          <div className="col-4">
            <label>{this.props.input4}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={"Ingrese " + this.props.input4 + "..."}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <label>{this.props.input5}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={"Ingrese " + this.props.input5 + "..."}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-4 offset-2">
            <label>{this.props.input6}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend">
                <span className="input-group-text h-100">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder={"Ingrese " + this.props.input6 + "..."}
              />
            </div>
          </div>
          <div className="col-2">
            <label>{this.props.input7}</label>
            <div className="input-group my-3">
              <div className="input-group-prepend"></div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="form-check">
                  <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" value="checkedValue" />
                    {this.props.check1}
                  </label>
                </div>
            </div>
        </div>
<div className="row justify-content-center">
    <div className="col-8">
    <button className="btn btn-primary my-3">Guardar</button>
    </div>
</div>
      </div>
    );
  }
}
