import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'

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
                        <div>
                            <DialogContent>
                                <DialogContentText>
                                    <b>PLEASE DO NOT RELEASE PERSONAL INFORMATION!</b>
                                </DialogContentText>

                                <TextField
                                    margin="dense"
                                    disabled
                                    id="Id"
                                    label="ID"
                                    value={this.props.info.Id}
                                    fullWidth
                                    />
                                <TextField
                                    disabled
                                    margin="dense"
                                    id="package"
                                    label="Package Type"
                                    value={this.props.info.package}
                                    fullWidth
                                    />
                                <TextField
                                    margin="dense"
                                    disabled
                                    id="place"
                                    label="Package Place"
                                    value={this.props.info.place}
                                    fullWidth
                                    />
                                <TextField
                                    margin="dense"
                                    disabled
                                    id="deadLine"
                                    label="The deadline for package"
                                    value={this.props.info.deadline}
                                    fullWidth
                                    />
                                <TextField
                                    margin="dense"
                                    disabled
                                    id="reward"
                                    label="reward"
                                    value={this.props.info.reward}
                                    fullWidth
                                    />
                                <TextField
                                    margin="dense"
                                    disabled
                                    id="detail"
                                    label="detail"
                                    multiline
                                    value={this.props.info.detail}
                                    fullWidth
                                    />
                                <TextField
                                    margin="dense"
                                    disabled
                                    id="remark"
                                    label="remark"
                                    value={this.props.info.remark}
                                    fullWidth
                                    />
                            </DialogContent>
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