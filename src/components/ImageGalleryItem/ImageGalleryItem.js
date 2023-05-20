import { useState } from 'react';
import Modal from '../Modal/Modal';
import { Item, ImageStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

function ImageGalleryItem(props) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <Item key={props.Card.id}>
      <ImageStyled
        src={props.Card.webformatURL}
        alt={`Image with id=${props.Card.id}`}
        width="150"
        onClick={toggleModal}
      />
      {showModal && (
        <Modal ImageDrop={props.Card.largeImageURL} onClose={toggleModal} />
      )}
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  Card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
export default ImageGalleryItem;
