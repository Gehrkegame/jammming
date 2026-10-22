import styles from './Track.module.css';

function Track({ track, onAdd, isRemoval, onRemove }) {
    return(
        <div className={styles.track}>
            <div><h3>{track.name}</h3>
            <p>{ track.artist }| { track.album }</p></div>
            
            {isRemoval ? <button onClick={() => onRemove(track)}>-</button> : <button onClick={() => onAdd(track)}>+</button>}
        </div>
    );
};

export default Track;