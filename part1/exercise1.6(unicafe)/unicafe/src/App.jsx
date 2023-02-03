import { useState } from "react"

import React from 'react'

const Button = ({text, handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>

  )
}

const Statistic = ({text, value}) => {
  return (
    <td>{text}{value}</td>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
return (
  <table>
    <tbody>
      <tr>
        <Statistic text='Good' />
        <Statistic value={good}/>
      </tr>
      <tr>
        <Statistic text='Neutral' />
        <Statistic value={neutral}/>
      </tr>
      <tr>
        <Statistic text='Bad' />
        <Statistic value={bad}/>
      </tr>
      <tr>
        <td><b>Total: </b></td>
        <td>{total}</td>
      </tr>
      <tr>
        <td><b>Average: </b></td>
        <td>{total === 0 ? 0 : (good - bad) / total}</td>
      </tr>
      <tr>
        <td><b>Positive: </b></td>
        <td>{total === 0 ? 0 : (good * 100) / total}%</td>
      </tr>
    </tbody>
  </table>
)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)

  return (
    <>
      <h1>Give feedback</h1>
      <Button text='good' handleClick={handleClickGood}/>
      <Button text='neutral' handleClick={handleClickNeutral}/>
      <Button text='bad' handleClick={handleClickBad}/>
      <h2>Statistics</h2>
      {good === 0 && neutral === 0 && bad === 0 ? (<h3>No feedback given</h3>) : (<Statistics good={good} neutral={neutral} bad={bad}/>) }
    </>
  )
}


export default App
