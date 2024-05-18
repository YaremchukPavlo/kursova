import React from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const RequestModal = ({
  showModal,
  handleCloseModal,
  handleSaveRequest,
  formData,
  setFormData,
  carModel,
  carMark,
}) => {
  const { id } = useParams(); // Move this outside the function component

  const handleSaveRequestAndSend = () => {
    handleSaveRequest();
    console.log(id);
    return axios.post(`/help/create/${id}`, {
      "user_email": "test@gmail.com"
    }, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Server response:", response.data);
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
          {/* Form content */}
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
