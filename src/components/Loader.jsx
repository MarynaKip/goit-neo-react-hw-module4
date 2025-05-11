import { ClipLoader } from 'react-spinners';
import styles from './Loader.module.css';

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function Loader({ loading }) {
  return (
    <ClipLoader
      className={styles.loaderContainer}
      color="red"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}
