import {useState} from 'react'

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
   const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))

   const handleRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * Math.floor(anecdotes.length))
    setSelected(randomAnecdote)
   }

   const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
   }

   const getHighestVote = Math.max(...votes)
   const maxVotesAnecdote = anecdotes[votes.indexOf(getHighestVote)]

   return (
    <div>
      <H1 text='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Votes votes={votes[selected]} />
      <Button onClick={handleVoteClick} text='vote'/>
      <Button onClick={handleRandomAnecdote} text='next anecdote'/>
      <H1 text='Anecdote with most votes'/>
      <Anecdote anecdote={maxVotesAnecdote}/>
      <Votes votes={getHighestVote}/>
    </div>
   )
}

const H1 = ({text}) => <h1>{text}</h1>
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const Anecdote = ({anecdote}) => <p>{anecdote}</p>
const Votes = ({votes}) => <p>has {votes} votes</p>

export default App;