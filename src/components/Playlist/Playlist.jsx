import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({playlistTracks, playlistName, onRemove}) {

    return (
        <div className={styles.playlist}>
            <input defaultValue={playlistName} />
            <Tracklist tracks={playlistTracks} isRemoval={true} onRemove={onRemove}/>
            <button>Save to Spotify</button>
        </div>
    )
};

export default Playlist;