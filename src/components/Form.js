import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNumber: "",
    };
  }

  saveNewNumber = (r) => {
    console.log(r.target.value);
    this.setState({newNumber: r.target.value,});
  };

  submit = (r) => {
    r.preventDefault();
    console.log("horn has been Entered");
    this.props.updateNum(this.state.newNumber);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Form.Group className="mb-3">
          <Form.Label>Choose Beasts by Horns</Form.Label>
          <Form.Control
            onchange={this.saveNewNumber}
            type="text"
            placeholder="Enter Horn Number"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Form1;
