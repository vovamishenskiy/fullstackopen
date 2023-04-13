import { useState } from "react"; 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // DEBUGGING HANDLERS //
  /* const handleGoodClick = () => {
    console.log('setting new good, good before: ', good)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('setting new neutral, neutral before: ', neutral)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log('setting new bad, bad before: ', bad)
    setBad(bad + 1)
  } */

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />

      <h1>statistics</h1>
      <p>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad}
      </p>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default App;