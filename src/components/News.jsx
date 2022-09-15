import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import './2.css';
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {chart_data : []};
  }
  componentWillMount(){
        $.ajax({
          url: "https://api.coincap.io/v2/assets",
          contentType: "application/json"
        })
          .done(
            function(abcd) {
              let temp = [];
              for(let i=0;i<100;i++){ temp.push(abcd.data[i]); }
              this.setState({ chart_data : temp});
              console.log(this.state.chart_data)
            }.bind(this)
          )
          .fail(
            function(datas) {
            }.bind(this)
          );
          //console.log(this.state.chart_data)
          }
         
  render() {
    const UserData = this.state.chart_data.map((author,index) => 
    <tr key={index}>
      <td>{index+1}</td>
      <td>{author.id}</td>
      <td >{author.supply}</td>
      <td>{author.maxSupply}</td>  
      <td>{author.marketCapUsd}</td> 
      <td>{author.volumeUsd24Hr}</td> 
      <td>{author.priceUsd}</td>   
      <td>{author.changePercent24Hr}</td> 
      <td>{author.vwap24Hr}</td> 
      <td>{author.explorer}</td> 
    </tr>
  )
    return (
      <div>
        <br></br>
            <h2 class="normal" align="center"><b>JSON Live Data Search using Ajax</b></h2>
            <h3 align="center"><b>Author's Data</b></h3>
            <br></br>
            <div >
           
        <br />
     
       
    { this.state.chart_data.length > 0  ? <table className="table table-hover table-success">          
            <thead>
              <tr>
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
      </div>
    );
  }
}
