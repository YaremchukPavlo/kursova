import React from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ConfirmationModal = ({
  showModal,
  handleCloseModal,
  handleSaveRequest,
  carModel,
  carMark,
}) => {
  const { id } = useParams();

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
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Чи впевнені ви що бажаєте замовити подібне авто?</p>
        <p>Марка: {carMark}</p>
        <p>Модель: {carModel}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSaveRequestAndSend}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;