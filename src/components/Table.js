import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        testAlign: "center"
    },
    table: {
        minWidth: 900,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

function TodoTable(props) {
    const { classes, todos, onClickEdit, onClickDelete, onToggle, loading, progress, history } = props;


    return (
        <Paper style={{ marginLeft: "10%" }} className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="left">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {
                        loading ?
                            <CircularProgress
                                className={classes.progress}
                                variant="determinate"
                                value={progress}
                            /> :

                            todos.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">
                                        {
                                            row.completed ?
                                                <Button onClick={(e) => onToggle(e, row)} style={{ textDecoration: "line-through" }}>{row.title}</Button>
                                                :
                                                <Button onClick={(e) => onToggle(e, row)}>{row.title}</Button>
                                        }

                                    </TableCell>
                                    <TableCell align="left">
                                        {row.completed ?
                                            <Button variant="contained" color="primary" className={classes.button}>
                                                True
                                </Button>
                                            : <Button variant="contained" color="secondary" className={classes.button}>
                                                False
                                </Button>}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button onClick={(e) => onClickEdit(e, row)} variant="contained" color="primary" className={classes.button}>
                                            Edit
                                </Button>
                                        <Button style={{ marginLeft: 5 }} align="right" onClick={(e) => onClickDelete(e, row.id)} variant="contained" color="secondary" className={classes.button}>
                                            Delete
                                </Button>

                                    </TableCell>

                                </TableRow>
                            ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

TodoTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoTable);

