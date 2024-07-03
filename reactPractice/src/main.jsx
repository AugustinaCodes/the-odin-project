import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Bio from './components/Bio.jsx'
// import AnimalApp from './components/RenderingAnimals.jsx'
import './index.css'
// import PackingList from './components/PackingList.jsx'
// import DrinkList from './components/DrinkList.jsx'
import List from './components/renderingLists/App.jsx'
// import TodoList from './components/TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <List />
  </React.StrictMode>,
)
