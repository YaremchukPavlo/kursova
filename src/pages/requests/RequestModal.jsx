import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RequestModal = ({
  showModal,
  handleCloseModal,
  handleSaveRequest,
  formData,
  setFormData,
  carModel,
  carMark,
}) => {
  const handleSaveRequestAndSend = () => {
    handleSaveRequest();
    fetch("/requests/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error sending request to server:", error);
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={formData.userEmail}
              onChange={(e) =>
                setFormData({ ...formData, userEmail: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCarModel">
            <Form.Label>Car Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car model"
              name="carModel"
              value={carModel || formData.carModel}
              onChange={(e) =>
                setFormData({ ...formData, carModel: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCarMark">
            <Form.Label>Car Mark</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car mark"
              name="carMark"
              value={carMark || formData.carMark}
              onChange={(e) =>
                setFormData({ ...formData, carMark: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveRequestAndSend}>
          Save Request
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestModal;
