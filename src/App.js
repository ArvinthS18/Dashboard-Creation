import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import {Navbar,Exchanges,Homepage,CryptoDetails,Cryptocurrencies,News} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './app.css';
import { Content } from 'antd/lib/layout/layout';
const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
                 <Navbar/>
        </div>
        <div className='main'>
          <Layout>
         
          <div className='header' Style={{backgroundColor:"black"}}>
            <br></br>
          <Typography.Title level={2} className="logo" align="center"><Link to="/"><b>Project Cryptoverse</b></Link></Typography.Title>
        </div>
        <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/exchanges" element={ <Exchanges/> } />
        <Route path="/cryptocurrencies" element={ <Cryptocurrencies/> } />
        <Route path="/crypto/:coinId" element={ <CryptoDetails/> } />
        <Route path="/news" element={ <News/> } />
      </Routes>
    
        <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Chart_Compare</Link>
          <Link to="/news">Table View</Link>
        </Space>
        </div>
        </Layout>
        </div>
        
    </div>
  )
}

export default App