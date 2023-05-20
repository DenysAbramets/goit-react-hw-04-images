import { useState, useEffect } from 'react';
import SearchBar from '../SeacrchBar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { fetchImages } from 'components/Api/Api';
import Button from 'components/Button/Button';
import { Container } from './App.styled';
import Spinner from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const STATUS = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [loading, setLoading] = useState(false);

  const handleClickLoadMore = () => {
    setLoading(true);
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [query]);

  useEffect(() => {
    if (query.trim() === '') {
      return;
    }

    fetchImages(query, page)
      .then(responce => {
        if (responce.length === 0 && page === 1) {
          return Promise.reject();
        }

        if (responce.length === 0 && page > 1) {
          toast.warn(
            `It's the end of the collection on your request by key "${query}"!`
          );
          return setStatus(STATUS.RESOLVED);
        }

        if (page > 1) {
          setImages(prevState => [...prevState, ...responce]);
        } else {
          setImages(responce);
        }

        setStatus(STATUS.RESOLVED);
      })
      .catch(() => {
        setStatus(STATUS.REJECTED);
        toast.error("We didn't find any images on your request!");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  return (
    <>
      <Container>
        <SearchBar onSubmit={setQuery} />
        {images.length !== 0 && status === STATUS.RESOLVED && (
          <ImageGallery Images={images} />
        )}
        {loading && <Spinner />}
        {status === STATUS.RESOLVED && (
          <Button PageChange={handleClickLoadMore} />
        )}
        {status === STATUS.REJECTED && <ToastContainer />}
      </Container>
    </>
  );
}
