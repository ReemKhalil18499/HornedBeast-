import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  votes = () => {
    this.setState({
      favorites: this.state.favorites + 1,
    });
  };
  show = () => {
    this.props.show(this.props.title);
    this.props.selectedBeastsFunction(
      this.props.title,
      this.props.description,
      this.props.imgSrc,
      this.props.horns
    );
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }} onClick={this.show}>
          <Card.Img
            variant="top"
            src={this.props.imgSrc}
            onClick={this.votes}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>❤️ : {this.state.favorites}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeasts;
