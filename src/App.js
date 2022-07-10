// comunicação com api
import React,{ Component } from 'react';
import api from './api';

class App extends Component {
  state= {
    products: [],
  }

  async componentDidMount() {
    // valor do objeto ali nos parenteses logo após api.get
    const response = await api.get(''); 

    this.setState({ products: response.data});
  }

  render() {

    const { products } = this.state;

    return (
       <div>
          <h1>salve</h1>
          {products.map(products => (
            <li key={products.show.id}>
              <h2>
                <strong>titulo: </strong>
                {products.show.name}
              </h2>
              <p>
                {products.show.url}
              </p>
            </li>
          )}
       </div>
    );
  };
};


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
