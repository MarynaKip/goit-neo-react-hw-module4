import ImageCard from './ImageCard';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ photos, onImageClick }) {
  return (
    <ul className={styles.gallery}>
      {photos.map(({ urls: { small, regular }, description }, index) => (
        <li key={index}>
          <ImageCard
            url={small}
            fullUrl={regular}
            description={description}
            onClick={() => onImageClick({ url: regular, description })}
          />
        </li>
      ))}
    </ul>
  );
}
