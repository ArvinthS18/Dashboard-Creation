import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import './2.css';
import pic from './8.png';
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
  findvalid=(Val)=>{
    const detail = (Val === null) ? "No data" : parseInt(Val);
    return detail;
  }

  render() { console.log(this.props.ab,"aaaaaaaaa")
    const UserData = this.props.ab.map((author,index) => 
    <tr key={index}>
      <td>{index+1}</td>
      <td>{(author.id)}</td>
      <td >{parseInt(author.supply)}</td>
      <td>{this.findvalid(author.maxSupply)}</td>  
      <td>{parseInt(author.marketCapUsd)}</td> 
      <td>{parseInt(author.volumeUsd24Hr)}</td> 
      <td>{parseInt(author.priceUsd)}</td>   
      <td>{parseInt(author.changePercent24Hr)}</td> 
      <td>{parseInt(author.vwap24Hr)}</td> 
      <td><a href="aa">{(author.explorer)}</a></td> 
    </tr>
  )
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
    { this.props.ab.length > 0  ? <table className="styled-table">        
            <thead>
              <tr className="active-row">
                <td>S.No</td>
                <td>ID</td>
                <td>SUPPLY</td>
                <td>MAXSUPPLY</td>
                <td>MARKETCAP USD</td> 
                <td>VOLUME USD 24hr</td> 
                <td>PRICE USD</td>            
                <td>CHANGE PERCENT 24hr</td> 
                <td>VWAP 24hr</td> 
                <td>EXPLORER</td> 
              </tr>
          </thead>
          <tbody>{UserData}</tbody>
          </table>:" "}
      </div >
      </div></div>
    );
  }
}