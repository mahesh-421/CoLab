import SignUp from './components/SignUp';

function App() {
  const electron = window?.electron;
  // console.log(electron?.homedir());
  // console.log(electron?.osVersion());
  // console.log(electron?.freeMemory());

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
