import React from 'react'
import icon from '../images/2.png';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
  
            <Avatar src={icon} align="center" /></div>    
<div className='asas'>
        <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Chart Compare</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">Table View</Link>              
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
      </Menu>     
   </div>
   
        </div>
  )
}

export default Navbar