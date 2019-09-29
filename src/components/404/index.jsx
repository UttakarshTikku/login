// @flow

import React, { Component } from 'react';

class NotFound extends Component {
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
            <div className="FormCenter">
                Page Not Found
            </div>
        );
    }
}
 
export default NotFound;