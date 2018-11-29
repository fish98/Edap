import React, { Component } from 'react'
import Sweet from 'sweetalert'

import Button from '@material-ui/core/Button'

import './App.css'

import DetailDialog from './components/detailDialog'
import RequestBoard from './components/requestBoard'
import PostDialog from './components/postDialog'
import Footer from './components/footer'
import Header from './components/header'

// const fetch = require('node-fetch')

const List = [
  {"Id": "ttfish",
  "tag": 1, 
  "Package": "Computer", 
  "Place": "Bird",
  "deadLine": 3,
  "Reward": 50,
  "detail": "",
  "remark": "",
  "image": "xxx.jpg" 
}, 
  {"Id": "Flower", 
  "tag": 2, 
  "Package": "Game", 
  "Place": "Bird",
  "deadLine": 7,
  "Reward": 500,
  "detail": "",
  "remark": "",
  "image": "xxx.jpg" 
}, 
  {"Id": "Lee", 
  "tag": 3, 
  "Package": "Perfume", 
  "Place": "Tcat",
  "deadLine": 6,
  "Reward": 0,
  "detail": "",
  "remark": "",
  "image": "xxx.jpg" 
}]

class App extends Component {

  state = {
    detail: {},
    detailOpen: false,
    postOpen: false
  }

  // control all 2 dialogs

  dialogClose = () => {
    this.setState({
      postOpen: false,
      detailOpen: false
    })
  }

  showDetailDialog = (index) => {
    this.setState({
      detail: List[index],
      detailOpen: true
    })
  }

  showPostDialog = () => {
    this.setState({
      postOpen: true
    })
  }

  showGuide = () => {
    Sweet('Guide to use', 'Select a order to view and just help~~', 'info')
  }

  render() {
    return (
      <div className="App">

        <Header />

        <div className='mainContent'>

          <div className="dashBoard"></div>

          <div className="choose">
            <Button variant="contained" size="large" href ="#requests" color="primary" onClick={this.showGuide}>
              I Can Help!
            </Button>
            <Button variant="contained" size="large" color="primary" onClick={this.showPostDialog}>
              Help Me!
            </Button>
          </div>

          <RequestBoard list={List} showDetailDialog={this.showDetailDialog}/>
 
        </div>

        <DetailDialog open={this.state.detailOpen} onClose={this.dialogClose} info={this.state.detail} scroll="paper" />
        <PostDialog open={this.state.postOpen} onClose={this.dialogClose} scroll="paper" />
        <div style={{"height": "100px"}}></div>

        <div className="myStatus">
        
        </div>

        <Footer />

      </div>
    )
  }
}

export default App
