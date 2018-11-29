import React from 'react'
import Button from '@material-ui/core/Button'

// const isMobile = (window.innerWidth < 600) ? true : false 

class Login extends React.Component{
    render(){
        return(
            <div style={{
                "position": "absolute",
                "top": "10px",
                "right": "30px"
                }}>
                 <Button variant="outlined" color="primary">Login</Button>
            </div>
        )
    }
}

export default Login