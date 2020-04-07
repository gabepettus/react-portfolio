import React, {useState} from 'react';
import { 
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  NavLink
} from 'reactstrap';

const PortModal = (props) => {
        // tech={data.tech} 
        // lessons={data.lessons} 
  const { 
    show,
    toggle,
    title,
    repo,
    tech,
    lessons,
    link
  } = props;

  return (
    <Modal
      isOpen={show}
      toggle={toggle}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader toggle={toggle}> {title} </ModalHeader>
      <ModalBody>
        <p> {tech} </p>
        <p> {lessons} </p>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggle}>Close</Button>
        <NavLink className='m-2' href={link} target='_blank'>See in action</NavLink>
      </ModalFooter>
    </Modal>
  );
}

export default PortModal;