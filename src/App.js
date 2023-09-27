import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Start</Button>
      </header>
    </div>
  );
}

export default App;
