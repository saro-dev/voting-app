import React, { Component } from 'react';
import './App.css';
import VotingCard from './components/VotingCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votedTeam: null, //team
    };
  }

  handleVote = (team) => {
    //for the user to change the vote
    if (this.state.votedTeam === team) {
      this.setState({ votedTeam: null });
    } else {
      this.setState({ votedTeam: team });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Vote Your Language!</h1>
        <div className="voting-cards">
          <VotingCard team="Python" voted={this.state.votedTeam === "Python"} onVote={() => this.handleVote("Python")} />
          <VotingCard team="Java" voted={this.state.votedTeam === "Java"} onVote={() => this.handleVote("Java")} />
          <VotingCard team="Kotlin" voted={this.state.votedTeam === "Kotlin"} onVote={() => this.handleVote("Kotlin")} />
          <VotingCard team="JavaScript" voted={this.state.votedTeam === "JavaScript"} onVote={() => this.handleVote("JavaScript")} />
        </div>
      </div>
    );
  }
}

export default App;
