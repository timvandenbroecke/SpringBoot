import * as React from 'react';
import Modal from '@mui/material/Modal';


export default function Modals({open, onClose, children, ...props}) {


  return (
       
    <Modal
        open={open || false}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
      <>
      {children}
      </>
    </Modal>
  );
}
