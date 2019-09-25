import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleSubmit(event) {
        alert('A form was submitted');
        event.preventDefault();
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h1>
                            Login Form
                        </h1>
                    </div>
                    <div>
                        <label>Username</label>
                        <input type='text' placeholder='Enter Username'></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' placeholder='Enter Password'></input>
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type='password' placeholder='Confirm Password'></input>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default Register;