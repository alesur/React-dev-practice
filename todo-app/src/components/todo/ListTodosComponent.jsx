import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService.js'
import { thisExpression } from '@babel/types'


class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : [],
             message : ''
        
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.getAllTodos(username)
        .then(
            response => {
               // console.log(response.data)
               this.setState({todos : response.data})
            }
        )
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
               this.setState({message : `Delete of  success!`})
               this.refreshTodos()
            }
        )


    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>description</th>
                            <th>Is complete</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                            <td><button className="bnt btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                        </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent