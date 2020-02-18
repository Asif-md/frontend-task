import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';



const styles = theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        testAlign: "center"
    },
    table: {
        minWidth: 400,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {

        const { history, classes } = this.props


        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    History
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"User's Activity History"}</DialogTitle>
                    <DialogContent>

                        <Paper style={{ marginLeft: "10%" }} className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell> User ID</TableCell>
                                        <TableCell align="left">When</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        history.length ? history.map(data => {

                                            return <TableRow key={data.key} >
                                                <TableCell> User {data.userId} Changed the TODO named "{data.title}"</TableCell>
                                                <TableCell>
                                                    <Moment format="YYYY/MM/DD HH:mm">
                                                        {data.key}
                                                    </Moment>
                                                    <b style={{ marginLeft: 5 }}>mins ago</b>
                                                </TableCell>

                                            </TableRow>
                                        }) : "No Data"
                                    }
                                </TableBody>
                            </Table>
                        </Paper>
                    </DialogContent>
                    <DialogActions>

                        <Button onClick={this.handleClose} color="primary" autoFocus>
                            Okay
            </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}
export default withStyles(styles)(History);
