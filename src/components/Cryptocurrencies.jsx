import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import pic from './8.png';
import { RadialBarChart, RadialBar, Legend } from "recharts";
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {chart_data : [], color:"White"};
  }
  ds=()=>
  {
  if(this.state.color=="White"){
      this.setState({color:"grey"})}
  else{

        this.setState({color:"White"})
      }
  }
  render() { const style = {
    top: 0,
    left: 950,
    lineHeight: "24px"
  };
  
    return (
      <div>
          
   <div style={{backgroundColor:this.state.color}}>
    <br></br>
   <span className='A'>
  <button class="btn btn-info" onClick={this.ds}><img src={pic} alt=";;" style={{width:"50px",height:"50px"}} /></button></span>
        <br></br>
            {/* <h2 class="normal" align="center"><b>JSON Live Data Search using Ajax</b></h2> */}
            <h2 align="center"><b>CryptoCurrencies Data</b></h2>
            <br></br>
            <div >
        <br /> 
        <RadialBarChart
      width={1500}
      height={1200}
      cx={450}
      cy={550}
      innerRadius={90}
      outerRadius={440}
      barSize={700}
      data={this.props.ab}
    >
      <RadialBar
        minAngle={43}
        label={{ position: "insideStart",  fill: "#8884d8", }}
        background
        clockWise
        dataKey="volumeUsd24Hr"
      />
      <Legend
        iconSize={10}
        width={120}
        height={240}
        layout="vertical"
        verticalAlign="left"
        wrapperStyle={style}
      />
    </RadialBarChart>
      </div >
      </div></div>
    );
  }
}