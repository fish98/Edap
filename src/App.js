import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

import './App.css'
import Footer from './footer'
import Header from './header'

const fetch = require('node-fetch')

const List = [
  {"Id": "ttfish", 
  "Package": "Computer", 
  "Place": "Bird",
  "deadLine": 3,
  "Reward": 50
}, 
  {"Id": "Flower", 
  "Package": "Game", 
  "Place": "Bird",
  "deadLine": 7,
  "Reward": 500
}, 
  {"Id": "Lee", 
  "Package": "Perfume", 
  "Place": "Tcat",
  "deadLine": 6,
  "Reward": 0
}]

const selected = []

const onSelect = (index) => {
  if(selected.indexOf(index)){
    selected.splice(selected.indexOf(index))
  } else {  
    selected.push(index)
  }

}

const Request = 
    <div className="requests">
        <Paper className="requestPaper">
          <Table className="requestTable">
            <TableHead>
              <TableRow>
                <TableCell>QSC ID</TableCell>
                <TableCell>Package Type</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>Deadline</TableCell>
                <TableCell>Reward</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {List.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <Checkbox
                      checked={selected.indexOf(index) !== -1}
                      onChange={onSelect(index)}
                    />
                    <TableCell>{item.Id}</TableCell>
                    <TableCell>{item.Package}</TableCell>
                    <TableCell>{item.Place}</TableCell>
                    <TableCell numeric>{item.deadLine}</TableCell>
                    <TableCell numeric>{item.Reward}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
    </div>

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

          {Request}

        </div>

        <Footer />

      </div>
    )
  }
}

export default App
