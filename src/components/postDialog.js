import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'

import Sweet from 'sweetalert'

class PostDialog extends React.Component{

    state = {}

    handleChange = name => event => {
        this.setState({ 
            [name]: event.target.value 
        })
    }

    handleClose = () => {
        this.props.onClose()
    }

    submitForm = () => {
        console.log(this.state)
        this.props.onClose()
        Sweet('Success', 'Submit Request Success!', 'success')
    }

    render(){
        return(
            <div className="postDialog">
                <Dialog open={this.props.open} onClose={this.handleClose} scroll="paper">
                    <DialogTitle id="detailDialogTitle">I need help from the TIDE</DialogTitle>
                    <div>
                    <DialogContent>
                        <DialogContentText>
                        To gain help from others. please fill in the blanks and do not forget the image of your school ID card  
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="ID"
                            // value={this}
                            onChange={this.handleChange('id')}
                            fullWidth
                            />
                        <TextField
                            margin="dense"
                            id="package"
                            label="Express Package"
                            // value={this}
                            onChange={this.handleChange('package')}
                            fullWidth
                            />
                        <TextField
                            margin="dense"
                            id="place"
                            label="Package Place"
                            // value={this}
                            onChange={this.handleChange('place')}
                            fullWidth
                            />
                        <TextField
                            margin="dense"
                            id="deadline"
                            label="Due to the package"
                            // value={this}
                            onChange={this.handleChange('deadline')}
                            fullWidth
                            />
                        <TextField
                            margin="dense"
                            id="reward"
                            label="How much you want to reward"
                            // value={this}
                            onChange={this.handleChange('reward')}
                            fullWidth
                            />
                        <TextField
                            margin="dense"
                            id="detail"
                            label="Copy your Text from App"
                            multiline
                            onChange={this.handleChange('detail')}
                            fullWidth
                            />
                        <TextField
                            margin="dense"
                            id="remark"
                            label="Any remarks want to remain"
                            placeholder="7 degree sweet"
                            onChange={this.handleChange('remark')}
                            fullWidth
                            />
                    </DialogContent>
                    </div>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        算了 我自己去拿吧   
                        </Button>
                        <Button onClick={this.submitForm} color="primary">
                        Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            )
        }
    }

export default PostDialog