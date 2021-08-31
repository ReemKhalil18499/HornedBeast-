import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";


class HornedBeasts extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      imageWasClicked: 0,
    };
  }

  increaseNumberofClicks = () => {
    this.setState({
      imageWasClicked: this.state.imageWasClicked + 1,
    });
  };

  render() {
    return (
      <div>
        {/* BOOTSTRAP */}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.image_url} onClick={this.increaseNumberofClicks}  />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>❤️ : {this.state.imageWasClicked}</Card.Text>
            <Card.Text>{this.props.keyword}</Card.Text>
            <Card.Text>{this.props.horns}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
