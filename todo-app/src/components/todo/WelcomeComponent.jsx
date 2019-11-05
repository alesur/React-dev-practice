import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService'

class WelcomeComponent extends Component{
constructor(props){
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this)
    this.state = {
       wlcomeMessage :''
    }
}

    render(){
        return (

            <>
            <h1>Welcome</h1>
            <div className="container">
                Welcome to dashboard {this.props.match.params.name} 
                Manage your todos <Link to="/todos">OPEN</Link>
            </div>

            <div className="container">
                Click Here to get custom welcome message
                <button onClick={this.retrieveWelcomeMessage} className="btn btn-sucess">Get welome message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
            
        )
    }
    // retrieveWelcomeMessage() {
    //     HelloWorldService.executeHelloWorldService()
    //     .then(response => this.handleSuccessfullResponse(response))
    //   //  .catch()
    // }
    
    retrieveWelcomeMessage() {
    //     HelloWorldService.executeHelloWorldBeanService()
    //     .then(response => this.handleSuccessfullResponse(response))
    //   //  .catch()
      HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
      .then(response => this.handleSuccessfullResponse(response))
    //  .catch()

    }
    

    handleSuccessfullResponse(response){
        console.log(response)
        this.setState({welcomeMessage: response.data.message})
        
    }
}



export default WelcomeComponent