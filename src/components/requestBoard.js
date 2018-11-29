import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

class RequestBoard extends React.Component{

    render(){
        return(
            <div className="requests" id="requests">
                <Paper className="requestPaper">
                <Table className="requestTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>QSC ID</TableCell>
                            <TableCell>Package Type</TableCell>
                            <TableCell>Place</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.list.map((item,index) => (
                        <TableRow key={index} onClick={this.props.showDetailDialog.bind(this, index)}>
                        <TableCell>{item.Id}</TableCell>
                        <TableCell>{item.Package}</TableCell>
                        <TableCell>{item.Place}</TableCell>
                    </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </Paper>
            </div>
        )
    }
}

export default RequestBoard



