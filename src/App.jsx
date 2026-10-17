import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';

function App() {
  return(
    <div className="app">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="columns">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
};

export default App;