import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    if (name.trim() === "") {
      toast.error("Add text to Search!");
      return;
    }
    onSubmit(name);
    form.reset();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="name"
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}
