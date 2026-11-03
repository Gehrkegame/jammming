import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';
import { useState } from 'react';
import Spotify from './components/util/Spotify';

function App() {
  const tracks = [
  {id: 1, name: "Toes", artist: "Zack Brown Band", album: "Toes", uri:"spotify:track:1"},
  {id: 2, name: "Shake it off", artist: "Talor Swift", album: "1989", uri:"spotify:track:2"},
  {id: 3, name: "Take a Drunk Girl Home", artist: "Chris Janson", album: "Everybody", uri:"spotify:track:3"},
];
const [playlistName, setPlaylistName] = useState('New Playlist');
const [playlistTracks, setPlaylistTracks] = useState([ { id: 4, name: "Rockstar", artist: "Nickelback", album: "All the Right Reasons", uri: "spotify:track:2" }]);
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
  return(
    <div className="app">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="columns">
        <SearchResults tracks={tracks} onAdd={addTrack}/>
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}/>
      </div>
    </div>
  );
};

export default App;

