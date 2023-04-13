import {useState} from 'react'

const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })

  /* const handleLeftClicks = () => {
    const newClicks = {
      ...clicks, // instead of right: clicks.right we can use 'object spread'
      left: clicks.left + 1      
    }
    setClicks(newClicks)
  }

  const handleRightClicks = () => {
    const newClicks = {
      ...clicks, // instead of left: clicks.left we can use 'object spread'
      right: clicks.right + 1
    }
    setClicks(newClicks)
  } */

  // const handleLeftClicks = () => setClicks({...clicks, left: clicks.left + 1})
  // const handleRightClicks = () => setClicks({...clicks, right: clicks.right + 1})

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      {/* <p>{allClicks.join(' ')}</p>
      <p>total: {total}</p> */}
      <History allClicks={allClicks}/>
    </div>

    // <div>
    //   {left}
    //   <button onClick={() => setLeft(left + 1)}>left</button>

    //   <button onClick={() => setRight(right+1)}>right</button>
    //   {right}
    // </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const History = (props) => {
  if(props.allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons</div>
    )
  }
  return (
    <div>button press history: {props.allClicks.join(' ')}</div>
  )
}

export default App;