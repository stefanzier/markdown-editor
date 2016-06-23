import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render Blaze accounts for then find div in the
    // render() and place Blaze's account form in that
    // div
    this.view = Blaze.render(Template.loginButtons, 
      ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // Find the forms we created and destroy them
    // Clean up forms ourselves
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;