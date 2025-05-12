import styles from './ImageCard.module.css'

export default function ImageCard({ url, description, onClick }) {
  return (
    <li className={styles.card} onClick={onClick}>
      <img src={url} alt={description || "Image"} />
    </li>
  );
}
