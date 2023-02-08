import React from 'react';
import SideMenu from '../../common/SideMenu/SideMenu';
import { Col, Row } from 'antd';
import TotalExample from '../../../QuotationAPI/TOTAL-example/TotalExample';

function UpbitMainPage() {
    return (
        <>
        <Row>
            <Col span={3}><SideMenu/></Col>
            <Col span={21}><TotalExample /></Col>
        </Row>
        </>
    );

}
export default UpbitMainPage;
