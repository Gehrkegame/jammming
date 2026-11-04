import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';
import { useState } from 'react';
import Spotify from './util/Spotify';

function App() {
  const[searchResults, setSearchResults] = useState([]);
const [playlistName, setPlaylistName] = useState('New Playlist');
const [playlistTracks, setPlaylistTracks] = useState([]);
const addTrack = (track) => {
  if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
    return;
  }
  setPlaylistTracks([...playlistTracks, track]);
};

const removeTrack = (track) => {
  setPlaylistTracks(playlistTracks.filter(savedTrack => savedTrack.id !== track.id));
};
const updatePlaylistName = (name) => {
  setPlaylistName(name);
};
const savePlaylist = () => {
  const trackURIs = playlistTracks.map(track => track.uri);
  setPlaylistName('New Playlist');
  setPlaylistTracks([]);
  console.log(trackURIs);
};
const search = (term) => {
  setSearchResults(Spotify.search(term));
};
  return(
    <div className="app">
      <h1>Jammming</h1>
      <SearchBar onSearch={search}/>
      <div className="columns">
        <SearchResults tracks={searchResults} onAdd={addTrack}/>
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
      </div>
    </div>
  );
};

export default App;

