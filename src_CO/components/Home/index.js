import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Row } from 'react-bootstrap';
import { DateTimePicker } from 'react-widgets'

class Home extends Component {

    render() {
        
        return (
            <Row>
                <div className="col-md-5">
                    <div>
                        <DateTimePicker />
                    </div>
                </div>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {stories: state.homeStories}
}

export default Home