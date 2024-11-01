import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../App/App.types";
import { ImageGalleryProps } from "../App/App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <div className={s.ImageGallery_container}>
      <ul className={s.imageGallery_list}>
        {images.length > 0 ? (
          images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} openModal={() => openModal(image)} />
            </li>
          ))
        ) : (
          <li className={s.ImageGallery_p}>No images found</li>
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
