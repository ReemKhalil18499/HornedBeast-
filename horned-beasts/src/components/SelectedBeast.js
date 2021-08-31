import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Title>Modal heading</Modal.Title>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">
              {/* onClick={handleClose} */}
              Close
            </Button>
            <Button variant="primary">
              {/* onClick={handleClose} */}
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default SelectedBeast;
