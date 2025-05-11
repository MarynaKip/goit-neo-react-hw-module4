import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <img src={image?.url} alt={image?.description || "Full size"} />
    </ReactModal>
  );
}
