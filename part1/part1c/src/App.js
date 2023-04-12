import { useState } from "react";

const App = (props) => {
  // const {counter} = props

  const [counter, setCounter] = useState(0)
  
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
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
/* const Hello = ({name, age}) => { // props in parameters changed to {name, age}
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