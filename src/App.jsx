import axios from "axios";
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage'
import ImageGallery from './components/ImageGallery'
import ImageModal from './components/ImageModal'
import Loader from './components/Loader'
import LoadMoreBtn from './components/LoadMoreBtn'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [query, setQuery] = useState(null)
  const [page, setPage] = useState(1)
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      try {
        setErrorMessage(null)
        setLoading(true);
        const accessKey = '3BAUyFk-duAAhae13I_HbI0zCrxfLGV2XNfNu4_AriU'
        const baseUrl = "https://api.unsplash.com/"
        const url = `${baseUrl}search/photos?client_id=${accessKey}&query=${query}&page=${page}&per_page=20`
        const response = await axios.get(url);
        setPhotos(prevPhotos => [...prevPhotos, ...response.data.results])
      } catch(error){
        const fallbackMessage = error?.response?.data?.errors?.[0] || "Something went wrong. Please try again.";
        setErrorMessage(fallbackMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page])

  function openModal(image) {
    setSelectedImage(image);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  function handleSubmit(name) {
    setPhotos([]);
    setPage(1);
    setQuery(name);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      {photos.length > 0 && <ImageGallery photos={photos} onImageClick={openModal} />}
      {photos.length > 0 && !loading && <LoadMoreBtn onSubmit={() => setPage(prev => prev + 1)} />}
      <Toaster position="top-right" reverseOrder={false} />
      {loading && <Loader loading={loading} />}
      {errorMessage && <ErrorMessage message={errorMessage}/>} 
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={selectedImage} />
    </>
  )
}

export default App
