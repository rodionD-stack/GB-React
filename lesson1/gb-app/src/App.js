import { Provider } from 'react-redux';
import './App.css';
import { Router } from './components/Router/Router';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router/>
    </PersistGate>
    </Provider>
  );
}

export default App;
