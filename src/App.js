import React, { Component } from "react";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import friends from "./friends.json";
//import Counter from "./components/Counter";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";

//import logo from "./logo.svg";

import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score:0,
    animation:'none'
  };

  handleClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });

    // create a teporary array so we don't mess with the existing state
    let dontMessWithState= new Array(...this.state.friends)

    console.log("DMWS Index: ",dontMessWithState)

    let friendIndex;
    // compare the id of the friend card being clicked, when it is equal to 
    dontMessWithState.forEach((value,index)=>{
      if(value.id===id)
      {
        if(value.clicked){
          // reset function and css shake
          this.reset();
        }else{
        friendIndex=index;
        value.clicked=true;
        this.setState({score: this.state.score+1})
        }
      }
    })

    dontMessWithState= this.shuffle(dontMessWithState);
    console.log("Friend Index: ",friendIndex)
    console.log("Friend id：",id)
    console.log("DMWS after: ",dontMessWithState)

    // change the state with the new shuffled friends array 
    this.setState({friends:dontMessWithState})

  };
  // shuffle method, use swap to swap the current index with a random index.
  shuffle(input){
    console.log("shuffling")
    input.forEach((v,i)=>{
      this.swap(input, i, Math.floor(Math.random()* input.length))
    })

    return input
  }
  // swap array index's order
  swap(array,a,b){
    let temp= array[a]
    array[a]=array[b]
    array[b]= temp
  }

  // reset method
  reset = ()=>{
    // shake images
    this.setState({score:0})
  }
  
  // shake method to add animation:shake to friend card
  // shake = ()=>{
  //   this.setState({animation:this.state.animation.shake})
  // }

  // define the shake method
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score}/>
        <Container>
          <Title>Friends List</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              style={this.state.animation}
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              movie={friend.movie}
              //clicked={friend.clicked}
            />
          ))}
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
