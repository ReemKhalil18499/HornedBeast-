import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";


class Main extends React.Component {
  render() {
    return (
      <main>
        <Form className="selectForm">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Number Of Horns</Form.Label>
            <Form.Control as="select" custom onChange={this.selectHandler}>
              <option>Enter Number Of Horns</option>
              <option id="1" value="1">
                one
              </option>
              <option id="2" value="2">
                two
              </option>
              <option id="3" value="3">
                three
              </option>
              <option id="100" value="100">
                HUNDRED !!
              </option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Row xs={1} md={3} className="g-4">
          {this.props.data.map((item) => {
            return (
              <HornedBeasts
                title={item.title}
                imgSrc={item.image_url}
                description={item.description}
                horns={item.horns}
                show={this.props.show}
                selectedBeastsFunction={this.props.selectedBeastsFunction}
              />
            );
          })}
        </Row>
      </main>
    );
  }
}

export default Main;
