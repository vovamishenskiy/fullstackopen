import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if ((good || neutral || bad) === 0)
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <StatisticLine text="good" value={good} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="neutral" value={neutral} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="bad" value={bad} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="all" value={all} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="average" value={average} />
            </td>
          </tr>
          <tr>
            <td>
              <StatisticLine text="positive" value={positive} /> <span>%</span>
            </td>
          </tr>
        </tbody>
      </table>
      
      {/* good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br/>
        all {all} <br/>
        average {average} <br/>
        positive {positive}% <br/> */}
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <span>
      {text} {value}
    </span>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
