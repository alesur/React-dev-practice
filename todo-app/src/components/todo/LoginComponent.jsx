import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

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

export default LoginComponent