import styles from './Track.module.css';

function Track() {
    return(
        <div className={styles.track}>
            <div><h3>Song Name</h3>
            <p>Artist|Album</p></div>
            
            <button>+</button>
        </div>
    );
};

export default Track;