import styles from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState('');
    return (
        <div className={styles.searchBar}>
            <input placeholder="Search for your Songs" value={term} onChange={(e) => setTerm(e.target.value)}/>
            <button onClick={() => onSearch(term)}>Search</button>
        </div>);
};

export default SearchBar;