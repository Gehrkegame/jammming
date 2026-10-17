import styles from './Track.module.css';

function Track() {
    return(
        <div className={styles.track}>
            <h3>Song Name</h3>
            <p>Artist|Album</p>
            <button>+</button>
        </div>
    );
};

export default Track;