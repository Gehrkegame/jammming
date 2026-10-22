import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';
import { useState } from 'react';

function App() {
  const tracks = [
  {id: 1, name: "Toes", artist: "Zack Brown Band", album: "Toes"},
  {id: 2, name: "Shake it off", artist: "Talor Swift", album: "1989"},
  {id: 3, name: "Take a Drunk Girl Home", artist: "Chris Janson", album: "Everybody"},
];
const [playlistName, setPlaylistName] = useState('New Playlist');
const [playlistTracks, setPlaylistTracks] = useState([ { id: 4, name: "Rockstar", artist: "Nickelback", album: "All the Right Reasons" }]);
const addTrack = (track) => {
  if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  setPlaylistTracks([...playlistTracks, track]);
};
  return(
    <div className="app">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="columns">
        <SearchResults tracks={tracks} onAdd={addTrack}/>
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
      </div>
    </div>
  );
};

export default App;

