import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  // db test connection block
  useEffect(()=>{
    const testDBConnection = async () =>{
      try{
        // GET request to backend's test route
        const response = await axios.get('http://localhost:5000/test-db');
        // log if the response was successful
        console.log('db connection successful:', response.data);
      }catch (error){
        // log errors
        console.error('db connection test failed:', error);
      }
    };
    // call function
    testDBConnection();
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
