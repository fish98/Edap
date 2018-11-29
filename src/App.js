import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

// import Checkbox from '@material-ui/core/Checkbox'

import './App.css'
import DetailDialog from './detailDialog'
import Footer from './footer'
import Header from './header'

// const fetch = require('node-fetch')

const List = [
  {"Id": "ttfish",
  "tag": 1, 
  "Package": "Computer", 
  "Place": "Bird",
  "deadLine": 3,
  "Reward": 50,
  "detail": "",
  "image": "xxx.jpg" 
}, 
  {"Id": "Flower", 
  "tag": 2, 
  "Package": "Game", 
  "Place": "Bird",
  "deadLine": 7,
  "Reward": 500,
  "detail": "",
  "image": "xxx.jpg" 
}, 
  {"Id": "Lee", 
  "tag": 3, 
  "Package": "Perfume", 
  "Place": "Tcat",
  "deadLine": 6,
  "Reward": 0,
  "detail": "",
  "image": "xxx.jpg" 
}]

class App extends Component {

  state = {
    detail: {},
    detailOpen: false
    // checked: []
  }

  // handleToggle = value => () => {
  //   const { checked } = this.state
  //   const currentIndex = checked.indexOf(value)
  //   const newChecked = [...checked]

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1)
  //   }

  //   this.setState({
  //     checked: newChecked
  //   })

  // }

  handleClose = () => {
    this.setState({
      detailOpen: false
    })
  }

  showDetail = (index) => {
    this.setState({
      detail: List[index],
      detailOpen: true
    })
  }

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

          {<div className="requests">
            <Paper className="requestPaper">
              <Table className="requestTable">
                <TableHead>
                  <TableRow>
                    {/* <TableCell>Assistance</TableCell> */}
                    <TableCell>QSC ID</TableCell>
                    <TableCell>Package Type</TableCell>
                    <TableCell>Place</TableCell>
                    {/* <TableCell>Deadline</TableCell>
                    <TableCell>Reward</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {List.map((item,index) => (
                    <TableRow key={index} onClick={this.showDetail.bind(this, index)}>
                    {/* <TableCell>
                      <Checkbox
                      checked={this.state.checked.indexOf(index) !== -1}
                      onClick={this.handleToggle(index)}
                      />
                      <Button variant="contained" color="primary">
                        Help Me!
                    </Button>
                    </TableCell> */}
                    <TableCell>{item.Id}</TableCell>
                    <TableCell>{item.Package}</TableCell>
                    <TableCell>{item.Place}</TableCell>
                    {/* <TableCell numeric>{item.deadLine}</TableCell>
                    <TableCell numeric>{item.Reward}</TableCell> */}
                  </TableRow>
                      ))}
                </TableBody>
              </Table>
            </Paper>
          </div>}
        </div>

        <DetailDialog open={this.state.detailOpen} onClose={this.handleClose} info={this.state.detail} scroll="paper" />

        <div style={{"height": "100px"}}></div>

        <Footer />

      </div>
    )
  }
}

export default App
