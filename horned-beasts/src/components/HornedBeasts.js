import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageWasClicked: 0,
    };
  }

  increaseNumberofClicks = () => {
    this.setState({
      imageWasClicked: this.state.imageWasClicked + 1
    });
  }

  render() {
    return (

      <div>
        {/* BOOTSTRAP */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.imgSrc} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
            ❤️ : {this.state.increaseNumberofClicks}
            </Card.Text>
            <Card.Text>
              {this.props.keyword}
            </Card.Text>
            <Card.Text>
              {this.props.horns}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <img src={this.props.imgSrc} />
        <h2>{this.props.keyword}</h2>
        <h2>{this.props.horns}</h2>
        <button on onClick={this.increaseNumberofClicks}>❤️</button> */}
      </div>

    );
  }
}

export default HornedBeasts;
