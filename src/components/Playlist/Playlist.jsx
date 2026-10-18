import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({playlistTracks}) {

    return (
        <div className={styles.playlist}>
            <input placeholder="New Playlist" />
            <Tracklist tracks={playlistTracks}/>
            <button>Save to Spotify</button>
        </div>
    )
};

export default Playlist;