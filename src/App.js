import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import './App.css'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello fish</h1>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        <Footer />
      </div>
    )
  }
}

export default App
