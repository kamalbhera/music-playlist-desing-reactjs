import './App.css';
import { initialTracksList } from './data';
import MusicPlayList from './components/MusicPlayList';
function App() {
  return (
    <div className="App">
      <MusicPlayList  initialTracksList={initialTracksList}/>
    </div>
  );
}

export default App;
