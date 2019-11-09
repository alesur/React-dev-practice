import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Lean Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.getTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }
            ))
    }


    onSubmit(values) {
        console.log(values)
    }

    render() {
     //   let{description, targetDate} = this.state //Advance Option 1
        let description = this.state.description
        let targetDate = this.state.targetDate
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            //decription, targetDate //Advanced Option 1
                            description: description,
                         //   targetDate: targetDate
                        }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }

}

export default TodoComponent

