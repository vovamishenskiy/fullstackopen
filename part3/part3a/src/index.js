import ReactDOM from "react-dom/client"
import App from "./App"
import React from "react"
import './index.css'

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ]

// axios.get('http://localhost:3001/notes').then(response => {
//   const notes = response.data
//   ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
// })

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
// })

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App notes={notes} />
// )