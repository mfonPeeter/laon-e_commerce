import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeOverlayHandler = () => {
    setShowModal(false);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return {
    showModal,
    showModalHandler,
    closeModalHandler,
    closeOverlayHandler,
  };
};

export default useModal;
