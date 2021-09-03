// import React from "react";
// import Form from "react-bootstrap/Form";

// class Form1 extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     newNumber: "",
//   };
// }

// saveNewNumber = (r) => {
//   console.log(r.target.value);
//   this.setState({newNumber: r.target.value,});
// };

// submit = (r) => {
//   r.preventDefault();
//   console.log("horn has been Entered");
//   this.props.updateNum(this.state.newNumber);
// };

// render() {
//   console.log(this.props);
//   return (
// <Form onChange={this.props.filteredImages}>
//   <Form.Group className="mb-3">
//     <Form.Label>Choose Beasts by Horns</Form.Label>
//     <Form.Select id="select" onChange={this.props.filteredImages}>
//       <option>Enter Number Of Horns</option>
//       <option id="1" value="1">
//         one
//       </option>
//       <option id="2" value="2">
//         two
//       </option>
//       <option id="3" value="3">
//         three
//       </option>
//       <option id="100" value="100">
//         HUNDRED !!
//       </option>
//     </Form.Select>
//   </Form.Group>
//       // </Form>
//       <Form.Select aria-label="Default select example">
//         <option>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </Form.Select>
//     );
//   }
// }

// export default Form1;

import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FormClass extends Component {
  render() {
    console.log(this.props);
    return (
      <Form onChange={this.props.filteredData}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="select">Choose number of horns</Form.Label>
          <Form.Select id="select" onChange={this.props.filteredData}>
            <option id="" value="0">
              All
            </option>
            <option id="1" value="1">
              one
            </option>
            <option id="2" value="2">
              Two
            </option>
            <option id="3" value="3">
              Three
            </option>
            <option id="100" value="100">
              Wow
            </option>
          </Form.Select>
        </Form.Group>
      </Form>
    );
  }
}

export default FormClass;
