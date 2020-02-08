import React, { Component } from "react";
import friends from "../friends.json"
// should score belong to or trigger Nav, or should score just be a functional component
// if an image is clicked, score+1, mark that image as clicked.
// if an image with clicked=true is clicked again, reset game.

class Counter extends Component {
  state = {
    count: 0,
    friends:friends
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  // if friends[id].clicked ===true, reset()
  reset = ()=>{
    this.setState({
        count:0
    })
  }

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-dark text-white">Click Counter!</div>{" "}
        <div className="card-body">
          <p className="card-text"> Click Count: {this.state.count} </p>{" "}
          <button className="btn btn-dark" onClick={this.handleDecrement}>
            Decrement{" "}
          </button>{" "}
          <button className="btn btn-dark" onClick={this.handleIncrement}>
            Increment{" "}
          </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Counter;
