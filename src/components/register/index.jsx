// @flow

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    validateFormData,
    checkPasswordStrength,
 } from './register.js'
import Modal from '../modal/index' 

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            showModal: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.toggleModalView = this.toggleModalView.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handlePasswordChange(e){
        this.handleChange(e);
        checkPasswordStrength(e.target.value, this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        validateFormData(this.state);
    }

    toggleModalView() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        let showTerms = <div style={{"color": "black"}}>Terms And Conditions Listed Here</div>
        return (
        <div className="FormCenter">
            <Modal handleClose={this.toggleModalView} show={this.state.showModal} children={showTerms}></Modal>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="#" onClick={this.toggleModalView} className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Register</button> <Link to="/login" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default Register;