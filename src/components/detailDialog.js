import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

class detailDialog extends React.Component{
    
    state = {
        open: false,
        name: '',
    }

    handleClose = () => {
        this.props.onClose()
    }    

    render(){
        return(
            <div className="detailDialog">
                  <Dialog open={this.props.open} onClose={this.handleClose} scroll="paper">
                        <DialogTitle id="detailDialogTitle">Detailed Information</DialogTitle>
                        {/* <b>绝密!!</b> */}
                        <div>
                        
                        </div>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Let me Think about it
                            </Button>
                            <Button onClick={this.handleClose} color="primary">
                            I'll Take This Package
                            </Button>
                        </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default detailDialog