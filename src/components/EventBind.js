import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "Good Bye!",
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* Approach 1 performance is impacted in large componnt because this will re render every time */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}

        {/* Approach 2 use an arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}

        {/* Approach 3 Recommended  Binding event in constructor*/}
        {/* <button onClick={this.clickHandler}>Click Me</button> */}

        {/* use arrow functions in class property */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
