import { useState } from 'react'

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [ votes, setVotes ] = useState(new Uint32Array(8))

  const handleAnecdoteClick = () =>  setSelected(Math.floor(Math.random() * 8))

  const handleVoteClick = () => {
    const copyVotes = [...votes]
    copyVotes[selected]++
    setVotes(copyVotes)
  }

  return (
    <div>
      <Heading text='Anecdote of the day' />
      <Anecdotes anecdotes={anecdotes} votes={votes} selected={selected} />
      <Button text='vote' handleClick={handleVoteClick} />
      <Button text='set anecdote' handleClick={handleAnecdoteClick} />

      <Heading text='Anecdote with most votes' />
      <Anecdotes anecdotes={anecdotes} votes={votes}
                selected={votes.indexOf(Math.max(...votes))} />
    </div>
    
  )
}

const Heading = ({text}) => <h1>{text}</h1>

const Anecdotes = ({anecdotes, votes, selected}) => {
  return (
    <>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </>
  )
}

const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default App