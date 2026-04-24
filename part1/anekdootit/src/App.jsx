import { useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  'The only way to go fast, is to go well.'
];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [selected, setSelected] = useState(0)
  const [anecdoteVotes, setAnecdoteVotes] = useState(Array.from({ length: anecdotes.length }, () => 0))
  const biggestIndex = anecdoteVotes.indexOf(Math.max(...anecdoteVotes))

  return (
    <div>
      <h2>Anecdotes</h2>
      <p>{anecdotes[selected]}</p>
      <Button onClick={() => {
        setAnecdoteVotes(anecdoteVotes.map((vote, index) => index === selected ? vote + 1 : vote))
      }} text='Vote' />
      <Button onClick={() => setSelected(randomInt(0, anecdotes.length))} text='Next anecdote' />

      <h2>Most voted anecdote</h2>
      <p>{anecdotes[biggestIndex]}</p>
    </div>
  )
}

export default App
