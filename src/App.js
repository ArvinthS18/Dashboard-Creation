import { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import $ from 'jquery';
import {Navbar,Exchanges,Homepage,CryptoDetails,Cryptocurrencies,News} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './app.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_assests: []     
    };
    this.set_Coin = this.set_Coin.bind(this);
  }
  componentWillMount() { 
    $.ajax({
      url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
      contentType: "application/json"
    })
      .done(
        function (abcd) {
          console.log(abcd.data,"11");
          this.setState({ chart_data: abcd.data });
          let temp1 = [];
          for(let i=0;i<363;i++){ temp1.push(abcd.data[i]); }
          this.setState({ c1 : temp1});
          // console.log(this.state.c1,"aa1")
          const ids = this.state.c1.map(object => {
            return object.priceUsd;
          });
          // console.log(ids,"aa12");
          const max = Math.max(...ids);
          // console.log(max);
          this.setState({ m : Math.floor(max)});
          console.log(this.state.m,"max")
          let temp3 = [];
          for(let i=0;i<363;i++){ temp3.push(abcd.data[i]); }
          temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
          // console.table(temp3[0].priceUsd)
          this.setState({ s : temp3[0].priceUsd});
          this.setState({ s1 : temp3[0].date});
          this.setState({ s11 : temp3[0].time});
        }.bind(this)
      )
      .fail(
        function (datas) {
        }
      );
    this.apicall(); }

  apicall() {
    $.ajax({
      url: "https://api.coincap.io/v2/assets",
      contentType: "application/json"
    })
      .done(
        function (abcd) {
          console.log(abcd.data,"22");
          this.setState({ all_assests: abcd.data });
        }.bind(this)
      )
      .fail(
        function (datas) {
        }
      );
  }
  set_Coin(id) {
    $.ajax({
      url: "https://api.coincap.io/v2/assets/"+id+"/history?interval=d1",
      
      contentType: "application/json"
    })
      .done(
        function (abcd) {
         
          this.setState({ chart_data: abcd.data});   
          console.log(this.state.chart_data,"ll"); 
          let temp1 = [];
          for(let i=0;i<363;i++){ temp1.push(abcd.data[i]); }
          this.setState({ c1 : temp1});
          console.log(this.state.c1,"aa1")
          const ids = this.state.c1.map(object => {
            return object.priceUsd;
          });
          // console.log(ids,"aa12");
          const max = Math.max(...ids);
          // console.log(max);
          this.setState({ m : Math.floor(max)});
          console.log(this.state.m,"max")
          let temp3 = [];
          for(let i=0;i<363;i++){ temp3.push(abcd.data[i]); }
          temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
          // console.table(temp3[0].priceUsd)     
          this.setState({ s : temp3[0].priceUsd});
          this.setState({ s1 : temp3[0].date});
          this.setState({ s11 : temp3[0].time});   
        }.bind(this)
      )
      .fail(
        function (datas) {
        }
      );


  }

  
  render() {console.log(this.state.API_URL);

  return (
    <div className='app'>
        <div className='navbar'>
                 <Navbar/>
        </div>
        <div className='main'>
          <Layout>
          <div className='header' >
            <br></br>
          <Typography.Title level={2} className="logo" align="center"><Link to="/"><b>Project Cryptoverse</b></Link></Typography.Title>
        </div>
        <Routes>
        <Route path="/" element={ <Homepage Chart_Data = {this.state.chart_data} m1={this.state.m}d={this.state.s} d1={this.state.s1} d2={this.state.s11} ab = {this.state.all_assests} SetCoin={this.set_Coin}   /> } />
        <Route path="/exchanges" element={ <Exchanges/> } />
        <Route path="/cryptocurrencies" element={ <Cryptocurrencies/> } />
        <Route path="/crypto/:coinId" element={ <CryptoDetails/> } />
        <Route path="/news" element={ <News ab = {this.state.all_assests} /> } />
      </Routes>
    
        <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
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
}}

