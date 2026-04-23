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
const StatisticLine = ({ label, value }) => (
  <tr><td>{label}</td><td>{value}</td></tr>
)

const Statistics = ({ good, neutral, bad }) => (
  <div>
    {good || neutral || bad ?
      <table>
        <tbody>
          <StatisticLine label='Good' value={good} />
          <StatisticLine label='Neutral' value={neutral} />
          <StatisticLine label='Bad' value={bad} />
          <StatisticLine label='All' value={good + neutral + bad} />
          <StatisticLine label='Average' value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine label='Positive' value={(good / (good + neutral + bad)) * 100} />
        </tbody>
      </table>
    : <p>No feedback given</p>}
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [anecdoteVotes, setAnecdoteVotes] = useState(Array.from({ length: anecdotes.length }, () => 0))
  const biggestIndex = anecdoteVotes.indexOf(Math.max(...anecdoteVotes))

  return (
    <div>
      <h2>Give feedback</h2>

      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

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
