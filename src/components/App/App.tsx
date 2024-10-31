import { useEffect, useState } from "react";
import "../../App.css";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchImages } from "../../servises/api"; // Переконайтеся, що шлях правильний
import ImageModal from "../ImageModal/ImageModal";
import { Image } from "./App.types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [totalPhotos, setTotalPhotos] = useState<number>(0);

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) return;

      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
        setTotalPhotos(data.total);
        toast.success("Search completed successfully!");
      } catch (error) {
        console.error(error);
        setError(true);
        toast.error("An error occurred while fetching images!");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleFilterChange = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(0);
  };

  return (
    <div className="App">
      <Toaster />
      <SearchBar onSubmit={handleFilterChange} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />
      {totalPages > page && (
        <LoadMoreBtn
          onClick={() => setPage((prev) => prev + 1)}
          haveImages={totalPhotos}
          isLoadingMore={false}
        />
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
