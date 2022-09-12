import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
const { Title } = Typography;
const Cryptocurrencies = () => {

  return (
 <>   <Title level={2} className="heading">Global Cryptocurrencies Status</Title>
 <Row>
 <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
 <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
 <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
 <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
 <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
 <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
  
  
  
  </Row></>
  )
}

export default Cryptocurrencies