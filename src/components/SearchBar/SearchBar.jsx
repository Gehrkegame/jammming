import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input placeholder="Search for your Songs"/>
            <button>Search</button>
        </div>);
};

export default SearchBar;