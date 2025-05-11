import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onSubmit }) {
  return (
    <button type="button" onClick={onSubmit} className={styles.button}>
      Load more
    </button>
  );
}
