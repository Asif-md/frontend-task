
import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

const User = ({ users, Uservalue, handleChange, classes }) => {
    return (
        <div>

            <FormControl className={classes.formControl}>

                <InputLabel htmlFor="userSelect">Select User</InputLabel>

                <Select
                    onChange={handleChange}
                    value={Uservalue}
                    className="form-control"
                    inputProps={{
                        name: 'Select',
                        id: 'userSelect',
                    }}
                >
                    {/* <MenuItem value="Select User">Select User</MenuItem> */}
                    {
                        users.length ? users.map((user) => {
                            return <MenuItem value={user.id} key={`sub-option-${user.id}`}>{user.name}</MenuItem>
                        }) : ""
                    }
                </Select>
            </FormControl>

        </div>
    )
}

export default withStyles(styles)(User);

