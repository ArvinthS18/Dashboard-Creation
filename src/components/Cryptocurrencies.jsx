
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TreeMapComponent, Inject, TreeMapLegend, TreeMapTooltip } from '@syncfusion/ej2-react-treemap';
import moment from 'moment';
import $ from 'jquery';
import pic from './8.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './1.css';
export default class App extends React.Component {
  constructor(props){
        super(props);
        this.state = {chart_data : [],m:0,c:[],s:0,s1:0,s11:0,color:"White"};
      }
      componentWillMount(){
            $.ajax({
              url: "https://api.coincap.io/v2/assets",
              contentType: "application/json"
            })
              .done(
                function(abcd) {
                  let temp = [];
                  for (let i = 0; i < 15; i++){ temp.push(abcd.data[i]); }
                  this.setState({ chart_data: temp});
                  console.log(this.state.chart_data)
                  //maximum value
                  let temp1 = [];
                  for(let i=0;i<15;i++){ temp1.push(abcd.data[i]); }
                  this.setState({ c : temp1});
                  console.log(this.state.c,"aa1")
                  const ids = this.state.c.map(object => {
                    return object.priceUsd;
                  });
                  this.setState({ m : ids});
                  
                  console.log(this.state.m,"ids")
                  console.log(this.state.m[0])
                  let temp2 = [];
                  for(let i=0;i<15;i++){ temp2.push(abcd.data[i]); }
                  this.setState({ c : temp2});
                  console.log(this.state.c,"aa1")
                  const ids1 = this.state.c.map(object => {
                    return object.name;
                  });
                  this.setState({ s11 : ids1});
                  console.log(this.state.s11,"n")

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
                ds=()=>
                {
                if(this.state.color=="White"){
                    this.setState({color:"black"})}
                else{
      
                      this.setState({color:"White"})
                    }
                }
    render() {
        return (
          <div className='qw'>
           <div style={{backgroundColor:this.state.color}}>
           <span className='A'>
  <button class="btn btn-info" onClick={this.ds}><img src={pic} alt=";;" style={{width:"50px",height:"50px"}} /></button></span>
        <TreeMapComponent id='treemap' tooltipSettings={{
          visible: true
      }} dataSource={[
            { Title: 'State wise International Airport count in South America', State: this.state.s11[0], Count:this.state.m[0] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[1], Count: this.state.m[1]},
            { Title: 'State wise International Airport count in South America', State: this.state.s11[2], Count: this.state.m[2]},
            { Title: 'State wise International Airport count in South America', State: this.state.s11[3], Count: this.state.m[3]},
            { Title: 'State wise International Airport count in South America', State:this.state.s11[4], Count: this.state.m[4]},
            { Title: 'State wise International Airport count in South America', State: this.state.s11[5], Count: this.state.m[5]},
            { Title: 'State wise International Airport count in South America', State: this.state.s11[6], Count: this.state.m[6]},
            { Title: 'State wise International Airport count in South America', State: this.state.s11[7], Count: this.state.m[7] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[8], Count: this.state.m[8] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[9], Count:this.state.m[9] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[10], Count: this.state.m[10] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[11], Count: this.state.m[11] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[12], Count: this.state.m[12] },
            { Title: 'State wise International Airport count in South America', State: this.state.s11[13], Count: this.state.m[13] },
        ]} weightValuePath='Count' equalColorValuePath='Count' legendSettings={{
            visible: true,
            position: 'Bottom',
            shape: 'Rectangle'
        }} leafItemSettings={{
            labelPath: 'State',
            colorMapping: [
                {
                    value: this.state.m[0],
                    color: '#634D6F'
                },
                {
                    value: this.state.m[1],
                    color: '#B34D6D'
                },
                {
                    value: this.state.m[2],
                    color: '#557C5C'
                },
                {
                    value: this.state.m[3],
                    color: '#44537F'
                },
                {
                    value: this.state.m[4],
                    color: '#637392'
                },
                {
                    value: this.state.m[5],
                    color: '#7C754D'
                },
                {
                    value: this.state.m[6],
                    color: '#2E7A64'
                },
                {
                    value: this.state.m[7],
                    color: '#95659A'
                },
            ]
        }}>
   <Inject services={[TreeMapTooltip, TreeMapLegend]}/>
</TreeMapComponent></div></div>);
    }
}
