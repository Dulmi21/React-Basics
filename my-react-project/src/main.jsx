import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import './Props/Students.css'

import'./Card.css'
import './Movies/Movies.css'
import './RenderingLists/List.css'
import './UseState()/Counter.css'
import './OnClickEvents/Button.css'

// import './Button/Button.css'
//Connect css files to the relavent jsx file
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
