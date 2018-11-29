import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <div className = "header" style={{"height": "60px"}}>
                <div style={{"height": "12px"}}></div>
                <div className="headerTitle" style={{"position": "relative", "left": "10px"}}>
                    求是潮快递互助平台 Q-DAP
                </div>
                <hr width="100%" color='#987cb9'/>
            </div>
        )
    }
} 

export default Header