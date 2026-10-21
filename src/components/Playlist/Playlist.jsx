import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({playlistTracks, playlistName}) {

    return (
        <div className={styles.playlist}>
            <input defaultValue={playlistName} />
            <Tracklist tracks={playlistTracks}/>
            <button>Save to Spotify</button>
        </div>
    )
};

export default Playlist;