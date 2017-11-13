import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './_Header.css'

class Header extends Component {

  render() {
   
    return (
      <div>
        <Row className="header">
          <span>Car Rental Info</span>
        </Row>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default Header;