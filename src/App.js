import React, { Component } from 'react'
import NumberButton from './components/NumberButton'

class App extends Component {

  state = {
    count: 0, 
    firstNum: 0,
    secondNum: 0,
    op: ''
  }


    handleFirstNum = value => {
      this.setState({ firstNum: this.state.value})
    }

    handleOperator = value => {
      this.setState({ op: this.state.value})
    }

    handleSecondNum = value => {
      this.setState({ secondNum: this.state.value})
    }

    handleFindValue = value => {
      this.setState({ findValue: this.state.value})
    }


    handleResult = () => {
      switch (this.state.op) {
        case "+":
          this.setState({ count: this.state.firstNum + this.state.secondNum})
          break;
        case "-":
          this.setState({ count: this.state.firstNum - this.state.secondNum})
          break;
        case "*":
          this.setState({ count: this.state.firstNum * this.state.secondNum})
          break;
        case "/":
        this.setState({ count: this.state.firstNum / this.state.secondNum})
        break;
      }
    }


    

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

        <NumberButton
          number={1} 
          handleFindValue={this.handleFindValue} />
        <NumberButton
          number={2} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={3} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={4} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={5} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={6} 
          handleIncrementCount={this.handleIncrementCount} />
          <NumberButton
          number={7} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={8} 
          handleIncrementCount={this.handleIncrementCount} />
        <NumberButton
          number={9} 
          handleIncrementCount={this.handleIncrementCount} />
          <NumberButton
          number={0} 
          handleIncrementCount={this.handleIncrementCount} />
        <br></br>

        <br></br>
        <br></br>
        <button>X</button>
        <button>/</button>
        <button>+</button>
        <button>-</button>
        <br></br>

        <button>=</button>
      </div>
    )
  }
}

export default App
