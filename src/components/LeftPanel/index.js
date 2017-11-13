import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { DatePicker, Input, Button, Icon } from 'antd';
import moment from 'moment';

import './_LeftPanel.css';
import { getCarRentalInfo } from '../../actions';

const { RangePicker } = DatePicker;


class LeftPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTimeRange: null,
            location: null,
        }
    }
    onRangeChange = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
        this.setState({dateTimeRange: value})        
    }

    onRangeOk = (value) => {
        console.log('onOk: ', value);
    }

    onLocChange = (e) => {
        this.setState({location: e.target.value});
    }

    onSearchSubmit = () => {
        const { dateTimeRange, location } = this.state;
        this.props.getCarRentalInfo(dateTimeRange, location);
    }

    disabledEndDate = (date) => {
        if (!date) {
            return false;
        }
        return date.valueOf() < moment().valueOf();
    }

    render() {
        return (
            <div>
                <div className="range-wrapper" >
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="MM/DD/YYYY HH:mm"
                        placeholder={['Start Date & Time', 'End Date & Time']}
                        onChange={this.onRangeChange}
                        onOk={this.onRangeOk}
                        size={"large"}
                        style={{width: '100%'}}
                        disabledDate={this.disabledEndDate}
                    />
                </div>
                <div className="input-wrapper">
                    <Input 
                        addonAfter={<Icon type="pushpin" />}
                        placeholder="Enter address, city or airport"
                        size={"large"}
                        onChange={this.onLocChange}
                        value={this.state.location}
                    />
                </div>
                <Button 
                    type="primary" 
                    icon="search"
                    size={"large"}
                    onClick={this.onSearchSubmit}
                >Search</Button>
                
            </div>
        )
    }
}
const mapStateToProps = () => {

}
export default connect(mapStateToProps,{ getCarRentalInfo })(LeftPanel);