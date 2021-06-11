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
                Hola! {this.props.name} !!
            </div>
         );
    }
}
