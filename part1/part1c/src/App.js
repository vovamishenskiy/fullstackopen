import { useState } from "react";

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
  // const {counter} = props

  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)
  
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  // console.log('rendering...', counter)

  // const handleClick = () => {
  //   console.log('clicked');
  // }

  const increaseByOne = () => {
    console.log('increasing, value before: ', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before: ', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before: ', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={setToZero} text='zero'/>
      <Button handleClick={decreaseByOne} text='minus'/>
    </div>

    /* <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>

      // { <button onClick={handleClick}>plus</button> }
      // { <button onClick={() => console.log('clicked')}>plus</button> }
      // { <button onClick={() => setCounter(counter + 1)}>plus</button> }
      // { <button onClick={() => setCounter(0)}>zero</button> }
    </div> */
  )

  // PART1C - COMPONENT HELPER FUNCTIONS AND DESCTRUCTURING //
  // const name = 'Peter'
  // const age = 10

  // return (
  //   <div>
  //     <h1>Greetings</h1>
  //     <Hello name='Maya' age = {26+10}/>
  //     <Hello name={name} age={age}/>
  //   </div>
  // )
}

// PART1C - DESTRUCTURING //
/* const Hello = ({name, age}) => { // props in parameters changed to {name, age}, so function can pass needed objects as props without having to initialize variable
  const bornYear = () => new Date().getFullYear() - age

  // DESCTRUCTURING // 
  // const {name, age} = props

  // const name = props.name
  // const age = props.age

  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }

  return (
    <div>
      <p>Hello, {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
} */

export default App;