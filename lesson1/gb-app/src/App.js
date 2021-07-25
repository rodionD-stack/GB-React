import { Message } from './Mssage'
import './App.css';

function App() {

  const someName = 'GeekBrains'

  return (
    <div className="App">
      <header className="App-header">
          <Message name={someName}/>
      </header>
    </div>
  );
}

export default App;
