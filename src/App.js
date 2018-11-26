import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import './App.css'
import Footer from './footer'
import Header from './header'

const fetch = require('node-fetch')

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <div className='mainContent'>

          <div className="dashBoard"></div>

          <div className="choose">
            <Button variant="contained" color="primary">
              I Can Help!
            </Button>
            <Button variant="contained" color="primary">
              Help Me!
            </Button>
          </div>

        </div>

        <Footer />

      </div>
    )
  }
}

export default App
