import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class TodoApp extends Component {
    render(){
        return (
            <div className="todoApp">
                <Router>
                    <>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}/>
                    <Route path="/login" component={LoginComponent}/>
                    <Route path="/todos" component={ListTodosComponent}/>
                    <Route path="/welcome/:name" component={WelcomeComponent}/>
                    <Route path="/logout" component={LogoutComponent}/>

                    <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent></FooterComponent>
                    </>
                </Router>

                {/* <LoginComponent></LoginComponent>
                <WelcomeComponent></WelcomeComponent> */}
            </div>
        )
    }
   
}

class HeaderComponent extends Component {
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
<div><a href="/" className="navbar-brand">TodosAPP</a></div>
<ul className="navbar-nav">
{isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/admin">Home</Link></li>} 
{isUserLoggedIn && <li ><Link className="nav-link" to="/todos">Todos</Link></li>}
</ul>
<ul className="navbar-nav navbar-collapse justify-content-end">
{!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
{isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}   
</ul>
                    </nav>
                </header>
            </div>
        )
    }
}

class FooterComponent extends Component {
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">Copyright</span>

            </footer>
        )
    }
}

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            todos : 
            [
            {id: 1, description : 'Learn React', done: false, targetDate: new Date()},
            {id: 2, description : 'learn React', done: false, targetDate: new Date()},
            {id: 3, description : 'Get programming JOB', done: false, targetDate: new Date()}
        ]
        
        }
    }

    render(){
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>Is complete</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                        <tr>
                            <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
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

class WelcomeComponent extends Component{
    render(){
        return (

            <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome to dashboard {this.props.match.params.name} Manage your todos <Link to="/todos">OPEN</Link>
            </div>
            </>
            
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <>
            <h1>You are logged out</h1>
            <div className="container">
                Thank you for using our app
            </div>
            </>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Your Name',
            password: '',
            hasLoginFailed: false,
            showSucessMessage: false
        }
    
      this.changeFieldStatus = this.changeFieldStatus.bind(this)
      this.loginClicked = this.loginClicked.bind(this)
    }

    changeFieldStatus(event){
       this.setState({
        [event.target.name]:
            event.target.value})
    }

    loginClicked(){
        console.log(this.state)
        if(this.state.username==='admin' && this.state.password==='root'){
   AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        // this.setState({showSucessMessage:true})
        // this.setState({hasLoginFailed:false})
        }
         else{
         console.log('failed')
         this.setState({showSucessMessage:false})
         this.setState({hasLoginFailed:true})
        }
    }
    render() {
        return (
        <div>
            <h1>Login</h1>
            <div className="container">
                <ShowInavalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
               <ShowLoginSucess showSucessMessage={this.state.showSucessMessage}/>
                User Name:<input type="text" name="username" value={this.state.username} onChange={this.changeFieldStatus}/>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.changeFieldStatus}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
            </div>
        )
    }
}



function ShowInavalidCredentials(props){
    if(props.hasLoginFailed){
        return <div className="alert alert-warning">Invalid Credentials</div>
    }
    return null
}

function ShowLoginSucess(props){
    if(props.showSucessMessage){
        return  <div>Login Sucessfull</div>
    }
    return null
}

function ErrorComponent(){
    return<div>Page not found 404!!</div>
}

export default TodoApp