import mainPage from './mainPage/mainPage.import { connect } from 'react-redux'
import React, { Component } from 'react'

type Props = {}

type State = {}

export class App extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>App</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)';

function App() {
  return (
    <div className="App">
      <mainPage/>
    </div>
  );
}

export default App;
