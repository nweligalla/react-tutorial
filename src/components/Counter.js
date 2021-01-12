import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   // setState has 2 parameters object and callback function
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  increment5(){
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
  }

  render() {
    return (
      <div>
        <h1>count {this.state.count}</h1>
        <button onClick={() => this.increment5()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
