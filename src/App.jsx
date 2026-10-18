import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';

function App() {
  const tracks = [
  {id: 1, name: "Toes", artist: "Zack Brown Band", album: "Toes"},
  {id: 2, name: "Shake it off", artist: "Talor Swift", album: "1989"},
  {id: 3, name: "Take a Drunk Girl Home", artist: "Chris Janson", album: "Everybody"},
];
const playlistTracks = [];
  return(
    <div className="app">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="columns">
        <SearchResults tracks={tracks}/>
        <Playlist playlistTracks={playlistTracks}/>
      </div>
    </div>
  );
};

export default App;

