import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

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

export default WelcomeComponent