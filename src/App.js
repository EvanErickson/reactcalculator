import React, { Component } from 'react'
import NumberButton from './components/NumberButton'

class App extends Component {

  state = {
    count: 0
  }

  handleIncrementCount = value => {
    this.setState({ count: this.state.count + value })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <NumberButton
          number={5} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={7} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={12} 
          handleIncrementCount={this.handleIncrementCount} />
      </div>
    )
  }
}

export default App
