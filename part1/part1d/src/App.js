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

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>

    // <div>
    //   {left}
    //   <button onClick={() => setLeft(left + 1)}>left</button>

    //   <button onClick={() => setRight(right+1)}>right</button>
    //   {right}
    // </div>
  )
}

export default App;