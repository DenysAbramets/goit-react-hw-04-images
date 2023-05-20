import axios from 'axios';
const IMAGES_PER_PAGE = 12;
const URL = 'https://pixabay.com/api/';

export const fetchImages = async (value, page) => {
  const options = {
    params: {
      key: '34570965-f4c02bf2bd7f36d8810cb4ca2',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: IMAGES_PER_PAGE,
    },
  };

  const response = await axios.get(URL, options);
  const array = response.data.hits;
  console.log(array);
  return array.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
};
