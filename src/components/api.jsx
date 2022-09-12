import React, { PureComponent } from 'react';
import Homepage from "./Homepage"
import $ from 'jquery';
import moment from 'moment';

export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {chart_data : []};
  
  
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
          //console.log(this.state.chart_data)
          }
          dateFormatter (item) {
            return moment(item).format("DD MMM YY");}

render() {
  return (
  <div>
   <Homepage aa={this.state.chart_data}/>
  </div>
  );
}
}