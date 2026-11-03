import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({playlistTracks, playlistName, onRemove, onNameChange}) {

    return (
        <div className={styles.playlist}>
            <input value={playlistName} onChange={(e) => onNameChange(e.target.value)}/>
            <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
            <button>Save to Spotify</button>
        </div>
    )
};

export default Playlist;