import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture(value) {
    this.setState({
      picture: value
    });
  };

  updateName(value) {
    this.setState({
      name: value
    });
  };

  addFriend(value) {
    const {picture, name, friends} = this.state
    const newFriend = {picture, name}
    this.setState({
      friends: [...friends, newFriend],
      picture: '',
      name: ''
    });
  };

  render() {
    console.log(this.state)
    const friends = this.state.friends.map((friend, index) => {
      return <div key={`friend-${index}`}>
      <img alt="friend pic" src={friend.picture} width="200px"></img>
      <span>{friend.name}</span>
      </div>
    })
    return (
      <div className="App">
          <span>Photo URL</span>
          <input placeholder ="add url here..." onChange={(event) => this.updatePicture(event.target.value) } value ={this.state.picture}/>
          <span>Friend name</span>
          <input placeholder="add name..." onChange={(event) => this.updateName(event.target.value)} value ={this.state.name}/>
          <button onClick ={() => this.addFriend()}>Add Friend</button>
          {friends}
      </div>
    );
  }
  
}

export default App;
