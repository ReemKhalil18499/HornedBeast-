import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfVotes: 0,
    };
  }

  incrementnumberOfVotes = () => {
    this.setState({
      numberOfVotes: this.state.numberOfVotes + 1,
    });
  };
  show = () => {
    this.props.show(this.props.title);
    this.props.selectedBeastsFunction(
      this.props.title,
      this.props.description,
      this.props.imgSrc
      ,this.props.horns ,
    );
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem" }} onClick={this.show}>
          <Card.Img
            variant="top"
            src={this.props.imgSrc}
            onClick={this.incrementnumberOfVotes}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>❤️ : {this.state.numberOfVotes}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.props.horns}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeasts;
