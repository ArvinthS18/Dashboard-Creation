import React, { PureComponent } from 'react';
import { LineChart,Line,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,Bar,BarChart } from 'recharts';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import pic from './8.png';
import moment from 'moment';
import { Button } from 'antd';
import './1.css';
import Tab12 from './Tab';

export default class Homepage extends PureComponent {
  constructor(props){
    super(props);
    this.state = {chart_data : [],
      a:true,
      b:false,
      c:false,
      d:false,
      color:"White"
    };
  }
          // Chart Portion
          ss =()=>{
            this.setState({a:true,b:false,c:false})
          }
          ss1=()=>{
            this.setState({b:true,a:false,c:false})
          }
          ss2 =()=>{
            this.setState({c:true,a:false,b:false})
          }

          //Night Light
          ds=()=>
          {
          if(this.state.color=="White"){
              this.setState({color:"aliceblue"})}
          else{

                this.setState({color:"White"})
              }
          }
          dateFormatter (item) {
            return moment(item).format("DD MMM YY");}     
render() {
  return (
    <div className='qw'>
      
     
   <div style={{backgroundColor:this.state.color}}>
   <div className="col-md-6" style={{ position: "absolute", fontSize: "22px", left: "104px", top: "100px" }}> {this.props.Coin_Name + " - " + this.props.Coin_Symbol}</div>
<br></br>
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
        width={1200}
        height={330}
        data={this.props.Chart_Data}
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
     <h1 align="center" style={{color:"green"}}><b>BAR CHART</b></h1>
       <BarChart
         width={1200}
         height={300}
         data={this.props.Chart_Data}
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
<h1 align="center" style={{color:"green"}}><b>AREA CHART</b></h1>
<AreaChart
  width={1230}
  height={250}
  data={this.props.Chart_Data}
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
      
       <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Top Price</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$  {this.props.m1}</span>
          <span className="featuredMoneyRate">
            {/* -11.4 */}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Top Price details</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ {this.props.m1}</span>
          <span className="featuredMoneyRate">
          DATE:  {this.props.d1}
          </span>
        </div>
        <span className="featuredSub"> TIME
        : {this.props.d2}</span>
      </div>
      <div className="currency">
                <table className="table table-dark table-sm">
                    <thead>
                        <tr><td>Coins</td></tr>
                    </thead>
                    <tbody >{this.props.ab ? this.props.ab.map((author, index) =>
                        <tr key={index}>
                            <td onClick={(e) => this.props.SetCoin(author.id,author.name,author.symbol)}>{author.symbol +"-"+ author.name} </td>
                        </tr>
                    ): ""}
                    </tbody>
                </table>
            </div>
    </div>

       <br></br>
       <br></br>
       <br></br>
       </div>

       </div>
  );
}
}