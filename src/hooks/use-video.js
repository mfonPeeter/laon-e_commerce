import { useState } from 'react';

const useVideo = () => {
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
    closeOverlayHandler,
    closeModalHandler,
  };
};

export default useVideo;
