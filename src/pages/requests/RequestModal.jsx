import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const RequestModal = ({
  showModal,
  handleCloseModal,
  handleSaveRequest,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Request Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCarModel">
            <Form.Label>Car Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car model"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              readOnly // Make it readonly as per your requirement
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCarMark">
            <Form.Label>Car Mark</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car mark"
              name="carMark"
              value={formData.carMark}
              onChange={handleChange}
              readOnly // Make it readonly as per your requirement
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveRequest(formData)}>
          Save Request
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestModal;
