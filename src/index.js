import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Wysiwyg from './components/Wysiwyg';
import { hot } from 'react-hot-loader'

class App extends Component {

  render() {
    <Wysiwyg />
  }

}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot/>, mountNode);