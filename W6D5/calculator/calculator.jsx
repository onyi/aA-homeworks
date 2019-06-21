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
    this.update = this.update.bind(this);

  }

  setNum1(e){
    e.preventDefault();
    let n1 = e.currentTarget.value

    console.log(`num1: ${n1}`);
    this.setState({ num1: n1 ? parseInt(n1) : "" }, function() {
      console.log("I am in callback");
    });

    console.log(`num1: ${this.state.num1}`);
  }

  setNum2(e){
    e.preventDefault();
    let num2 = e.currentTarget.value
    console.log(`num2: ${num2}`);
    this.setState({ num2: num2 ? parseInt(num2) : "" }, () => {});

  }

  update(e){
    e.preventDefault();
    let opt = e.currentTarget.id;
    console.log(`ID: ${opt}`);
    let res = 0;
    switch (opt){
      case '+':
        res = this.state.num1 + this.state.num2;
        break;
      case '-':
        res = this.state.num1 - this.state.num2;
        break;
      case '/':
        res = this.state.num1 / this.state.num2;
        break;
      case '*':
        res = this.state.num1 * this.state.num2;
        break;
      default:
        console.log('Unknown');
        break;
    }
    this.setState({ result: res });
  }

  render() {
    const {num1, num2, result } = this.state;
    return (
      <div>
        <h1>Hello World from Calculator (a React Component!!!)</h1>



        {/* <p>{this.state.result}</p> */}
        
        <div id="opt-group">
          <input type="text" id="num1" value={num1} onChange={this.setNum1}/>
          <button id="+" onClick={this.update}>+</button>
          <button id="-" onClick={this.update}>-</button>
          <button id="*" onClick={this.update}>x</button>
          <button id="/" onClick={this.update}>÷</button>
          <input type="text" id="num2" value={num2} onChange={this.setNum2}/>
        </div>

        <label>Result: <input type="text" disabled id="cal-result" value={result}/></label>
      </div>
    )
  };
}

export default Calculator;