import { useState } from 'react'

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

  return (
    <div>
      <h2>Give feedback</h2>

      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
