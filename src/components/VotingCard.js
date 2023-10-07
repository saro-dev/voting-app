import React, { Component } from 'react';
import './VotingCard.css';


class VotingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      voting: false,
    };
  }

  handleVote = () => {
    // checking card already voted or not 
    if (!this.state.voting) {
      this.setState({ voting: true });

      setTimeout(() => {
        this.setState({ voting: false });
        //parent onvote funcation call
        this.props.onVote();
      }, 1000); // 1sec animation. delay
    }
  }

  render() {
    const { team, voted } = this.props;
    const { votes, voting } = this.state;

    return (
      <div className={`VotingCard ${voted ? 'voted' : ''} ${voting ? 'voting' : ''}`}>
        <h2>{team}</h2>
        <p>Votes: {votes}</p>
        {voted ? <p>Voted</p> : null}
        <button onClick={this.handleVote} disabled={voted || voting}>
          {voted ? 'Change Vote' : 'Vote Here'}
        </button>
      </div>
    );
  }
}

export default VotingCard;
