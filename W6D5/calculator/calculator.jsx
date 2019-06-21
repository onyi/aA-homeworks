import React from 'react';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

  }

  setNum1(e){
    e.preventDefault();
    let num1 = e.currentTarget.value

    console.log(`num1: ${num1}`);
    this.setState({ num1: num1 });
  }

  setNum2(e){
    e.preventDefault();
    let num2 = e.currentTarget.value
    console.log(`num2: ${num2}`);
    this.setState({ num2: num2 }, () => {});

  }

  adding(e){

  }

  subtracting(e) {

  }

  multiplying(e) {

  }

  dividing(e) {

  }

  setState(){

  }

  render() {
    return (
      <div>
        <h1>Hello World from Calculator (a React Component!!!)</h1>



        {/* <p>{this.state.result}</p> */}
        
        <div id="opt-group">
          <input type="text" id="num1" value={this.state.num1} onChange={this.setNum1}/>
          <button id="+" onClick={this.adding.bind(this)}>+</button>
          <button id="-" onClick={this.subtracting.bind(this)}>-</button>
          <button id="*" onClick={this.multiplying.bind(this)}>x</button>
          <button id="/" onClick={this.dividing.bind(this)}>÷</button>
          <input type="text" id="num2" value={this.state.num2} onChange={this.setNum2}/>
        </div>

        <label>Result: <input type="text" disabled id="cal-result" value={this.state.result}/></label>
      </div>
    )
  };
}

export default Calculator;