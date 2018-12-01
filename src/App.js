import React, { Component } from 'react'
import Sweet from 'sweetalert'
import fetch from 'isomorphic-fetch'

import Button from '@material-ui/core/Button'

import './App.css'

import DetailDialog from './components/detailDialog'
import RequestBoard from './components/requestBoard'
import PostDialog from './components/postDialog'
import Footer from './components/footer'
import Header from './components/header'
import Login from './components/login'

// import config from './config'
const url = 'http://172.20.218.224:8102/all'

const option = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
    },
  mode: 'cors' 
}
// const List = [
//   {"id": "ttfish",
//   "tag": 1, 
//   "package": "Computer", 
//   "place": "Bird",
//   "deadline": 3,
//   "reward": 50,
//   "detail": "",
//   "remark": "",
//   "image": "xxx.jpg" 
// }, 
//   {"id": "Flower", 
//   "tag": 2, 
//   "package": "Game", 
//   "place": "Bird",
//   "deadline": 7,
//   "reward": 500,
//   "detail": "",
//   "remark": "",
//   "image": "xxx.jpg" 
// }, 
//   {"id": "Lee", 
//   "tag": 3, 
//   "package": "Perfume", 
//   "place": "Tcat",
//   "deadline": 6,
//   "reward": 0,
//   "detail": "",
//   "remark": "",
//   "image": "xxx.jpg" 
// }]

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
      detail: this.List[index],
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

  getAllData = () =>{
    fetch(url, option).then(data => {
      console.log(data)
    })
  }

  UNSAFE_componentWillMount(){
    this.getAllData()
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Login />
      
        <div className='mainContent'>

          <div className="dashBoard"></div>

          <div className="choose">
            <Button variant="contained" size="large" href ="#requests" color="primary" onClick={this.getAllData}>
              I Can Help!
            </Button>
            <Button variant="contained" size="large" color="primary" onClick={this.showPostDialog}>
              Help Me!
            </Button>
          </div>

          {/* <RequestBoard list={this.List} showDetailDialog={this.showDetailDialog}/> */}
 
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
