import { ImageStyle, ModalStyle, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.getElementById('modal-root');

function Modal(props) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      props.onClose();
      console.log(`Escape`);
    }
  };
  const modalClick = event => {
    if (event.target === event.currentTarget) {
      props.onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Overlay onClick={modalClick}>
      <ModalStyle>
        <ImageStyle src={props.ImageDrop} alt="" />
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
}

export default Modal;
