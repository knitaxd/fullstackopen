import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });
  const [mostVoted, setMostVoted] = useState('');


  const handleClickRandom = () => {
    checkVotes();
    setSelected(Math.floor(Math.random() * 6));
  };

  const handleClickVote = () => {
    checkVotes();
    setVotes({ ...votes, [selected]: votes[selected] + 1 });
  };

  const checkVotes = () => {
    setMostVoted(
      Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b))
    );
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{anecdotes[selected]}</h3>
      <p>This anecdote has {votes[selected]} votes</p>
      <button onClick={handleClickVote}>Up Vote</button>
      <button onClick={handleClickRandom}>Next</button>
      <h1>Anecdotes with most votes</h1>
      {
        mostVoted === '' ? 'Insuficient votes' : 
        <div>
          <h3>{anecdotes[mostVoted]}</h3>
          <p>This anecdote has {votes[mostVoted]} votes</p>
        </div>
      }
    </div>
  );
};

export default App;
