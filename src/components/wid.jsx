
// import "./1.css";
// import React, { PureComponent } from 'react';
// import $ from 'jquery';
// import moment from 'moment';
// import Homepage from "./Homepage";
// export default class App extends PureComponent {
//   constructor(props){
//     super(props);
//     this.state = {chart_data : [],m:0,c:[],s:0,s1:0,s11:0};
    
//   }
//   componentWillMount(){
//         $.ajax({
//           url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
//           contentType: "application/json"
//         })
//           .done(
//             function(abcd) {
            
//               //maximum value
//               let temp1 = [];
//               for(let i=0;i<363;i++){ temp1.push(abcd.data[i]); }
//               this.setState({ c : temp1});
//               console.log(this.state.c,"aa1")
//               const ids = this.state.c.map(object => {
//                 return object.priceUsd;
//               });
//               console.log(ids,"aa12");
//               const max = Math.max(...ids);
//               console.log(max);
//               this.setState({ m : Math.floor(max)});
//               // get properties   
//               let temp3 = [];
//               for(let i=0;i<363;i++){ temp3.push(abcd.data[i]); }
//               temp3?.sort((a, b) => (a.priceUsd > b.priceUsd ? -1 : 1))
//               console.table(temp3[0].priceUsd)
//               this.setState({ s : temp3[0].priceUsd});
//               this.setState({ s1 : temp3[0].date});
//               this.setState({ s11 : temp3[0].time});
//             }.bind(this)
//           )
//           .fail(
//             function(datas) {
//             }.bind(this)
//           );
//           //console.log(this.state.chart_data)
//           }
//           dateFormatter (item) {
//             return moment(item).format("DD MMM YY");}
//  render() {
//   return (
//   <div>
// <div className="featured">
//       <div className="featuredItem">
//         <span className="featuredTitle">Top Value</span>
//         <div className="featuredMoneyContainer">
//           <span className="featuredMoney">$  {this.state.m}</span>
//           <span className="featuredMoneyRate">
//             {/* -11.4 */}
//           </span>
//         </div>
//         <span className="featuredSub">Compared to last month</span>
//       </div>
//       <div className="featuredItem">
//         <span className="featuredTitle">Top value details</span>
//         <div className="featuredMoneyContainer">
//           <span className="featuredMoney">$ {this.state.m}</span>
//           <span className="featuredMoneyRate">
//           {this.state.s1}
//           </span>
//         </div>
//         <span className="featuredSub"> {this.state.s11}</span>
//       </div>
//     </div>

//   </div>
//   );
// }
// }