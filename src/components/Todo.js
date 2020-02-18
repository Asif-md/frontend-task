import React, { Component } from 'react'
import axios from "../utils/api_fetch"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { getTodos, addTodo, deleteTodo, updateTodo } from '../actions/todoActions';
import Checkbox from '@material-ui/core/Checkbox';

import { getUsers } from "../actions/userActions"

import User from "./User"
import Form from "./Form"
import TodoTable from "./Table"
import History from "./History"

import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});




let headers = {
    "Content-type": "application/json; charset=UTF-8"
}

class Todo extends Component {

    constructor() {
        super();
        this.state = {
            id: Number,
            title: "",
            value: "",
            newUsers: [],
            isSubmitEnabled: true,
            isEditEnable: false,
            isLoading: false,
            isChecked: false,
            history: [],
            userName: ""
        }
    }

    componentDidMount() {
        this.props.getUsers();


    }


    handleChange = (event, name) => {

        this.setState({ value: event.target.value, userName: name });
        this.props.getTodos(event.target.value)

    };

    onChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitTodo = (e) => {
        e.preventDefault();
        const body = {
            userId: Number(this.state.value),
            title: this.state.title,
            completed: false
        }
        const body1 = {
            id: Number(this.state.id),
            userId: Number(this.state.value),
            title: this.state.title,
            completed: false,
            key: Date.now()
        }

        this.props.addTodo(body);
        this.setState(previousState => ({
            title: "",
            history: [...previousState.history, body1]
        }));
    }

    onClickDelete = (e, id) => {
        e.preventDefault();
        this.props.deleteTodo(id)
    }

    onClickEdit = (e, user) => {
        e.preventDefault();

        this.setState({
            id: user.id,
            title: user.title,
            isChecked: user.completed,
            isEditEnable: true,
        })
    }

    onUpdateTodo = (e) => {

        e.preventDefault();
        let { todos } = this.props;
        let selectedCard = todos.filter(obj => obj.id === this.state.id)[0];
        selectedCard.title = this.state.title;
        selectedCard.completed = this.state.isChecked

        const body1 = {
            id: selectedCard.id,
            userId: selectedCard.userId,
            title: selectedCard.title,
            completed: this.state.isChecked,
            key: Date.now()
        }
        this.setState({ todos, isEditEnable: false, title: "", isChecked: false })


        this.setState(previousState => ({
            isEditEnable: false,
            isChecked: false,
            todos,
            title: "",
            history: [...previousState.history, body1]
        }));


    }



    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    }

    render() {

        const { value, title } = this.state

        const { users, todos, classes, loading, loadingUser } = this.props


        return (
            <div style={{ textAlign: "center" }}>
                <br /><br /><br />
                <User users={users} Uservalue={value} handleChange={this.handleChange} loading={loadingUser.loading} />

                <br /><br />

                <Form
                    title={title}
                    onChange={this.onChange}
                    isEditEnable={this.state.isEditEnable}
                    onUpdateTodo={this.onUpdateTodo}
                    onSubmitTodo={this.onSubmitTodo}
                    checked={this.state.isChecked}
                    handleChange={this.toggleChange}

                />
                <br /><br />

                <History history={this.state.history} />

                {
                    loading.loading ?
                        <CircularProgress
                            className={classes.progress}
                            variant="determinate"

                        />

                        :
                        <TodoTable
                            todos={todos}
                            onClickEdit={this.onClickEdit}
                            onClickDelete={this.onClickDelete}
                            loading={loading.loading}
                            completed={this.state.completed}
                            onToggle={this.onToggle}
                            progress={this.state.progressCompleted}
                            history={this.state.history}
                        />}
            </div>
        )
    }
}

Todo.propTypes = {
    getTodos: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    todos: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    todos: state.todos.todos,
    users: state.users.users,
    loading: state.todos,
    loadingUser: state.users

});

export default connect(mapStateToProps, { getTodos, getUsers, addTodo, deleteTodo, updateTodo })(withStyles(styles)(Todo));
