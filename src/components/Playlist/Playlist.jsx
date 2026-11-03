import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({playlistTracks, playlistName, onRemove, onNameChange,onSave}) {

    return (
        <div className={styles.playlist}>
            <input value={playlistName} onChange={(e) => onNameChange(e.target.value)}/>
            <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
            <button onClick={onSave}>Save to Spotify</button>
        </div>
    )
};

export default Playlist;