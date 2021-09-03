import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FormClass extends Component {
  render() {
    console.log(this.props);
    return (
      <Form className="selectForm" onChange={this.props.NewNum}>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Number Of Horns</Form.Label>
          <Form.Control as="select" custom onChange={this.selectHandler}>
            <option value="All">All</option>
            <option value="1 Horn" >One</option>
            <option value="2 Horns">Two</option>
            <option value="3 Horns">Three</option>
            <option value="100 Horns">HUNDRED !!! </option>
          </Form.Control>
        </Form.Group>
      </Form>
    );
  }
}

export default FormClass;
