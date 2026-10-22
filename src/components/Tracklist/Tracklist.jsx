import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({tracks, onAdd, isRemoval, onRemove}) {
    return (
        <div className={styles.tracklist}>
            {tracks.map(track => (
                <Track key={track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default Tracklist;