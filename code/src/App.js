import logo from './logo.svg';
import './App.css';

function App() {
  const electron = window?.electron;
  console.log(electron?.homedir());
  // console.log(electron?.osVersion());
  // console.log(electron?.freeMemory());

  return <div className="App">HI there</div>;
}

export default App;
