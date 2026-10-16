import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist() {
    return (
        <div className={styles.tracklist}>
            <Track />
            <Track />
            <Track />
        </div>
    );
}

export default Tracklist;