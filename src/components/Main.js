import React from "react";
import HornedBeasts from "./HornedBeasts";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import dataJson from "../assets/data.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NumEntered: "",
      data: dataJson,
    };
  }

  filteredImages = (event) => {
    let newNum = event.target.value;
    let Arr = this.state.data;
    let filtered = Arr.filter((item) => {
      if (item.horns === newNum) {
        return item;
      } else if (0 === newNum) {
        return item;
      }
    });

    this.props.filteredDataJason(filtered);
  };

  render() {
    console.log(this.props);
    return (
      <main>
        <Form filteredImages={this.filteredImages}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Number Of Horns</Form.Label>
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
