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
      API_URL : "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",m:0,c1:[],s:[],s1:[],s11:[],
    };
  }
componentWillMount(){
        $.ajax({
          url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
          contentType: "application/json"
        })
          .done(
            function(abcd) {

              //Chart data
              let temp = [];
              for(let i=0;i<10;i++){ temp.push(abcd.data[i]); }
              this.setState({ chart_data : temp});
              console.log(this.state.chart_data);

              //Set value on the front maximum value and these details
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
            function(datas) {
            }.bind(this)
          );
          
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
              this.setState({color:"black"})}
          else{

                this.setState({color:"White"})
              }
          }
          dateFormatter (item) {
            return moment(item).format("DD MMM YY");}
            
            apicall(API_URL, Coin) {        
              $.ajax({
                  url: API_URL,
                  contentType: "application/json"
              })
                  .done(
                      function (abcd) {
                          let temp = [];
                          for (let i = 0; i < 10; i++){ temp.push(abcd.data[i]); }
                          this.setState({ chart_data: temp});

                          if (Coin === "BTC"){
              let temp1 = [];
              for(let i=0;i<363;i++){ temp1.push(abcd.data[i]); }
              this.setState({ c1 : temp1});
              console.log(this.state.c1,"aa1")
              const ids = this.state.c1.map(object => {
                return object.priceUsd;
              });
              const max = Math.max(...ids);
            
              this.setState({ m : Math.floor(max)});
              // get properties   
              let temp3 = [];
              for(let i=0;i<363;i++){ temp3.push(abcd.data[i]); }
              temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
              this.setState({ s : temp3[0].priceUsd});
              this.setState({ s1 : temp3[0].date});
              this.setState({ s11 : temp3[0].time});}
              else if ((Coin === "ETC")){
                let temp1 = [];
                for(let i=0;i<10;i++){ temp1.push(abcd.data[i]); }
                this.setState({ c1 : temp1});
                const ids = this.state.c1.map(object => {
                  return object.priceUsd;
                });
                const max = Math.max(...ids);
               
                this.setState({ m : Math.floor(max)});
                // get properties   
                let temp3 = [];
                for(let i=0;i<10;i++){ temp3.push(abcd.data[i]); }
                temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
               
                this.setState({ s : temp3[0].priceUsd});
                this.setState({ s1 : temp3[0].date});
                this.setState({ s11 : temp3[0].time});
              }
              else if ((Coin === "ETC")){


                let temp1 = [];
                for(let i=0;i<363;i++){ temp1.push(abcd.data[i]); }
                this.setState({ c1 : temp1});
                
                const ids = this.state.c1.map(object => {
                  return object.priceUsd;
                });
                
                const max = Math.max(...ids);
                
                this.setState({ m : Math.floor(max)});
                // get properties   
                let temp3 = [];
                for(let i=0;i<363;i++){ temp3.push(abcd.data[i]); }
                temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
              
                this.setState({ s : temp3[0].priceUsd});
                this.setState({ s1 : temp3[0].date});
                this.setState({ s11 : temp3[0].time});}
                else if ((Coin === "XMR")){
                  let temp1 = [];
                  for(let i=0;i<363;i++){ temp1.push(abcd.data[i]); }
                  this.setState({ c1 : temp1});
                  
                  const ids = this.state.c1.map(object => {
                    return object.priceUsd;
                  });
                  
                  const max = Math.max(...ids);
                
                  this.setState({ m : Math.floor(max)});
                  // get properties   
                  let temp3 = [];
                  for(let i=0;i<363;i++){ temp3.push(abcd.data[i]); }
                  temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
                  this.setState({ s : temp3[0].priceUsd});
                  this.setState({ s1 : temp3[0].date});
                  this.setState({ s11 : temp3[0].time});
              }
                      }.bind(this)
                  )
                  .fail(
                      function (datas) {
                      }
                  );
          }
      //Currency chart
      setBTC(){ this.apicall("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1","BTC")}
      setBCH(){this.apicall("https://api.coincap.io/v2/assets/ethereum-classic/history?interval=d1", "ETC")}
      setETH(){this.apicall(" https://api.coincap.io/v2/assets/monero/history?interval=d1", "XMR")}
      
render() {
  return (
    <div className='qw'>
     
   <div style={{backgroundColor:this.state.color}}>
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Crytocurrencies
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" type="button" onClick={(e) => this.setBTC(e)} >BTC</a>
    <a class="dropdown-item" type="button" onClick={(e) => this.setBCH(e)}>ETC</a>
    <a class="dropdown-item" type="button" onClick={(e) => this.setETH(e)}>XMR</a>
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
      
       <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Top Price</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$  {this.state.m}</span>
          <span className="featuredMoneyRate">
            {/* -11.4 */}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Top Price details</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ {this.state.m}</span>
          <span className="featuredMoneyRate">
          DATE:  {this.state.s1}
          </span>
        </div>
        <span className="featuredSub"> TIME
        : {this.state.s11}</span>
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