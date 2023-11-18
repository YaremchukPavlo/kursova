// Modal.js
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
    // Викликати функцію handleSaveRequest, яка зберігає дані
    handleSaveRequest();

    // Тут ви можете викликати функцію для відправки запиту на сервер з formData
    // Наприклад, використовуючи fetch або іншу бібліотеку для HTTP запитів
    fetch('/api/submit-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        // Обробка відповіді від сервера, якщо потрібно
        console.log('Server response:', data);
      })
      .catch(error => {
        console.error('Error sending request to server:', error);
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
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCarModel">
            <Form.Label>Car Model</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car model"
              name="carModel"
              value={carModel || formData.carModel}
              onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCarMark">
            <Form.Label>Car Mark</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter car mark"
              name="carMark"
              value={carMark || formData.carMark}
              onChange={(e) => setFormData({ ...formData, carMark: e.target.value })}
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
