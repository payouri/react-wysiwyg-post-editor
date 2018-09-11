import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Wysiwyg from './components/Wysiwyg';
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Wysiwyg />
      </div>
    )
  }

}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<App/>, mountNode);