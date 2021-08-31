import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {console.log(this.props);
    return (
      <div>
        <Modal show={this.props.show}  >
          <Modal.Title>{this.props.Title}</Modal.Title>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"   >
              Close
            </Button>
            <Button variant="primary"     > 
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default SelectedBeast;
