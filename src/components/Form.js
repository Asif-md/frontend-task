import React from 'react'
import TextField from '@material-ui/core/TextField';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },

});

const Form = ({ title, onChange, isEditEnable, onUpdateTodo, onSubmitTodo, classes, checked, handleChange }) => {
    return (


        <form>
            <div className="row">

                <TextField
                    id="standard-full-width"
                    label="Enter a Todo"
                    fullWidth
                    style={{ margin: 8, width: 200 }}
                    className={classes.textField}
                    onChange={onChange}
                    name="title"
                    value={title}

                />


                {
                    isEditEnable ?
                        <>

                            <Checkbox

                                color="primary"
                                checked={checked}
                                onChange={handleChange}
                                id="Checked"
                            />
                            <label htmlFor="Checked">Completed</label>
                            <Button style={{ marginTop: 22, marginLeft: 40 }} className={classes.button} color="primary" variant="contained" onClick={onUpdateTodo}>Update</Button>
                        </> :
                        <Button style={{ marginTop: 22 }} color="primary" variant="contained" onClick={onSubmitTodo} >Add</Button>
                }
            </div>

        </form>

    )
}

export default withStyles(styles)(Form);
