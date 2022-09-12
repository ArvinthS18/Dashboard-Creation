import React, { PureComponent } from 'react';
import { LineChart,Line,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Bar,BarChart } from 'recharts';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import pic from './8.png';
import moment from 'moment';
import { Button } from 'antd';
import './1.css';
import Wid from "./wid";
export default class Homepage extends PureComponent {
  constructor(props){
    super(props);
    this.state = {chart_data : [],
      a:true,
      b:false,
      c:false,
      d:false,
      color:"White",
    };
      
  }
  
 
  componentWillMount(){
        $.ajax({
          url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
          contentType: "application/json"
        })
          .done(
            function(abcd) {
              let temp = [];
              for(let i=0;i<10;i++){ temp.push(abcd.data[i]); }
              this.setState({ chart_data : temp});
            }.bind(this)
          )
          
          .fail(
            function(datas) {
            }.bind(this)
          );
          
          }
          ss =()=>{
            this.setState({a:true,b:false,c:false})
          }
          ss1=()=>{
            this.setState({b:true,a:false,c:false})
          }
          ss2 =()=>{
            this.setState({c:true,a:false,b:false})
          }
          ds=()=>
          {
          if(this.state.color=="White"){
              this.setState({color:"black"})}
          else{

                this.setState({color:"White"})
              }
          }
          dateFormatter (item) {
            return moment(item).format("DD MMM YY");}
             
            findMax(PRICES) {
                 return Math.max(...PRICES);
          }
          
         

render() {
  return (
    <div className='qw'>
     
   <div style={{backgroundColor:this.state.color}}>
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    API
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">CoinCab</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<span className='A'>
  <button class="btn btn-info" onClick={this.ds}><img src={pic} alt=";;" style={{width:"50px",height:"50px"}} /></button></span>
  
<div className='d'>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Chart Types
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button" onClick={this.ss}>Line Chart</button>
    <button class="dropdown-item" type="button" onClick={this.ss1}>Bar Chart</button>
    <button class="dropdown-item" type="button" onClick={this.ss2}>Area Chart</button>
  </div>
</div></div>
    {this.state.a && 
    <div className='a'>
            <h1 align="center"style={{color:"green"}}><b>LINE CHART</b></h1>
             <LineChart
        width={1000}
        height={300}
        data={this.state.chart_data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date"  tickFormatter={this.dateFormatter}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="priceUsd" stroke="#56a832" activeDot={{ r: 8 }} />
    
      </LineChart>
      </div> }{this.state.b &&
     <div className='b'>
     <h1 align="center"><b>BAR CHART</b></h1>
       <BarChart
         width={1500}
         height={300}
         data={this.state.chart_data}
         margin={{
           top: 5,
           right: 30,
           left: 20,
           bottom: 5,
         }}
         barSize={20}
       >
         <XAxis  dataKey="date"  tickFormatter={this.dateFormatter} scale="point" padding={{ left: 10, right: 10 }} />
         <YAxis />
         <Tooltip />
         <Legend />
         <CartesianGrid strokeDasharray="3 3" />
         <Bar dataKey="priceUsd" fill="#56a832" background={{ fill: '#eee' }} />
       </BarChart>
       </div>}
       {this.state.c && 
       <div>
<h1 align="center"><b>AREA CHART</b></h1>
<AreaChart
  width={1530}
  height={250}
  data={this.state.chart_data}
  margin={{
    top: 20, right: 20, bottom: 20, left: 20,
  }}
>
  <XAxis dataKey="date"  tickFormatter={this.dateFormatter} scale="point" padding={{ left: 10, right: 10 }}/>
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Area dataKey="priceUsd" fill="#56a832" background={{ fill: '#eee' }} />
  <Tooltip />
</AreaChart>

       </div>}
       <br></br>
       <br></br>
       <Wid />
       <br></br>
       <br></br>
       </div>
       </div>
  );
}
}