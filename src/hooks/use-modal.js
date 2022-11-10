import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = (overflowY = '') => {
    setShowModal(true);
    document.body.classList.add(overflowY);
  };

  const closeOverlayHandler = () => {
    setShowModal(false);
  };

  const closeModalHandler = (overflowY = '') => {
    setShowModal(false);
    document.body.classList.remove(overflowY);
  };

  return {
    showModal,
    showModalHandler,
    closeModalHandler,
    closeOverlayHandler,
  };
};

export default useModal;
