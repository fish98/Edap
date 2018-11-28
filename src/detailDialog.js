import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'

class detailDialog extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }

    handleClose = () => {
        this.props.onClose()
      }    

    render(){
        return(
            <div className="detailDialog">
                  <Dialog open={this.props.open} onClose={this.handleClose} scroll="paper">
                        <DialogTitle id="detailDialogTitle">Full Information</DialogTitle>
                        {/* <h1>Hello TTfish</h1> */}
                        <DialogContentText>
                        sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
              sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
              sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
              sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla
              sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
              </DialogContentText>
                        {/* <div>
                        <List>
                            <ListItemAvatar>
                                <Avatar>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="add account" />
                        </List>
                        </div> */}
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