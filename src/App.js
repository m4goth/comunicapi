// comunicação com api
import React,{ Component } from 'react';
import api from './api';

class App extends Component {
  state= {
    filmes: [],
  }

  async componentDidMount() {
    // valor do objeto ali nos parenteses logo após api.get
    const response = await api.get(''); 

    // console.log(response.data);

    this.setState({ filmes: response.data});
  }

  render() {

    const { filmes } = this.state;

    return (
       <div>
          <h1>Listar os filmes</h1>
          {console.log(filmes)}
          {filmes.map(filme => (
            <li key={filme.show.id}>
              <h2>
                <strong>titulo: </strong>
                {filme.show.name}
              </h2>
              <p>
                {filme.show.url}
              </p>
            </li>
          ))}
       </div>
    );
  };
};

export default App;

{/* import logo from './logo.svg';
import './App.css';

function App() {
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

export default App; */}
