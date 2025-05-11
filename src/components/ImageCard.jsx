import styles from './ImageCard.module.css';

export default function ImageCard({ url, description, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={url} alt={description} />
    </div>
  );
}
