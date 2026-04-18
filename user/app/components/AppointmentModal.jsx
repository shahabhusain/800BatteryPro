'use client';

import React from 'react';
import Modal from './Modal';
import Form from '../components/Services/Form';

const AppointmentModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form onSuccess={onClose} />
    </Modal>
  );
};

export default AppointmentModal;