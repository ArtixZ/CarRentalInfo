import React, { Component } from 'react';
import { Row, Col } from 'antd';

import LeftPanel from "../LeftPanel";
import RightPanel from '../RightPanel';

class Home extends Component {

    render() {
        return (
            <Row>
                <Col span={10}>
                    <LeftPanel />
                </Col>
                <Col span={14}>
                    <RightPanel />
                </Col>
            </Row>
        )
    }
}

export default Home