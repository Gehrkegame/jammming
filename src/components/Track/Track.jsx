import styles from './Track.module.css';

function Track({ track, onAdd }) {
    return(
        <div className={styles.track}>
            <div><h3>{track.name}</h3>
            <p>{ track.artist }| { track.album }</p></div>
            
            <button onClick={() => onAdd(track)}>+</button>
        </div>
    );
};

export default Track;