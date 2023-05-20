/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
function ImageGallery({ Images }) {
  return (
    <Gallery>
      {Images.map(card => (
        <ImageGalleryItem key={card.id} Card={card} />
      ))}
    </Gallery>
  );
}
export default ImageGallery;

ImageGallery.propTypes = {
  Images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
