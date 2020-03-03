import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0

  };

  componentDidMount(){
   var newFriends = this.state.friends.map(friend => {
      friend.clicked = false
      return friend
    })

    this.setState({
      friends: newFriends
    })
    // this.state.friends.map()=>  {
    //   "id": 1,
    //   "name": "SpongeBob",
    //   "image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
    //   "occupation": "Fry Cook",
    //   "location": "A Pineapple Under the Sea",
    //   "clicked":false

    // },

    // .
    // .
    // .
    // until last element
  }

  clickFriend = id => {

       //friends =[{id:1, name:"Phil"}, {id:2,name:"maddie"},{id:2,name="bob"}]
       //this.state.friends.filter(friend=>friend.id===2)
       //newfriends=[{id:2,name="Maddie"},{id:2,name:"bob"}]

       //friends=[{id:1,name:"Phil"},{ id:2,name:"Maddie"},{id:2,name:"Bob"}]
       //this.state.friends.map(friend=>{
//                      return {<h1> friend.name  </h1>}
       //})
     //newFriends=["<h1>phil</h1>","<h1>Maddie</h2>","<h1>Bob</h1>"]
    // Filter this.state.friends for friends with an id not equal to the id being removed
     var newFriends = this.state.friends.map(friend => {
        
             if (friend.id === id){

                  if (friend.clicked === false){
                    friend.clicked = true
                    this.setState({
                      score: this.state.score +1
                    
                    })

                  if (this.state.score >= this.state.topscore)
                  {
                    this.setState({
                      topscore: this.state.topscore +1
                    })
                  }
                  }
                  else{
                     this.setState({
                       score: 0
                     })    
                  }
             }
             return friend
    });

    if (this.state.score === 0){
      newFriends = this.state.friends.map(friend =>{
        friend.clicked = false
        return friend 
      })
    }
    

    newFriends.sort(()=>Math.random()-0.5);



    // Set this.state.friends equal to the new friends array
    this.setState({ friends: newFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List  Score: {this.state.score}, Top Score: {this.state.topscore}  </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
