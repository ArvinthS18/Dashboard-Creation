import { Component } from "react"
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import pic from './8.png';
import './2.css';
import {
    ComposedChart,
    Bar,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export default class Chart_compare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            all_assests: [],
            drop_item: "Bitcoin",
            drop_item_1: "Ethereum",
            bit_coin: [], 
            eth_coin: [],
            new_arr: [], color:"White"
        }
        this.arr_put = this.arr_put.bind(this);
        this.api_Call = this.api_Call.bind(this);
        console.log(this.props.bit_coin,"Compare Bitcoin");
    }
    componentWillMount() {
        this.fun_2();
        this.api_Call();
    }
    fun_2() {
        $.ajax({
            url: "https://api.coincap.io/v2/assets",
            contentType: "application/json"
        })
            .done(
                function (abcd) {
                    this.setState({ all_assests: abcd.data });
                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );
        this.api_Call();
    }
    api_Call() {
        $.ajax({
            url: "https://api.coincap.io/v2/assets/bitcoin/history?interval=d1",
            contentType: "application/json"
        })
            .done(
                function (abc) {
                    this.setState({ bit_coin: abc.data });
                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );
        $.ajax({
            url: "https://api.coincap.io/v2/assets/ethereum/history?interval=d1",
            contentType: "application/json"
        })
            .done(
                function (abc1) {
                    this.setState({ eth_coin: abc1.data });
                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );
            this.arr_put() 
    }
    onclick_1(name, id) {
        this.setState({ drop_item: name});
        $.ajax({
            
            url: "https://api.coincap.io/v2/assets/" + id+ "/history?interval=d1",
            contentType: "application/json"
        })
            .done(
                function (abc) {
                    console.log(this.state.drop_item_id_1);
                    this.setState({ bit_coin: abc.data });
                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );
    }
    onclick_2(name, id) {
        this.setState({ drop_item_1: name});
        $.ajax({
            url: "https://api.coincap.io/v2/assets/" + id+ "/history?interval=d1",
            contentType: "application/json"
        })
            .done(
                function (abc1) {
                    this.setState({ eth_coin: abc1.data });
                }.bind(this)
            )
            .fail(
                function (datas) {
                }
            );

    }
    arr_put() {

        let arr_1 = this.state.bit_coin.map(obj => {
            return obj.date;
        });
        let arr_2 = this.state.bit_coin.map(obj => {
            return obj.priceUsd;
        });
        let arr_3 = this.state.eth_coin.map(obj => {
            return obj.priceUsd;
        });
        let final_arr = [];
        arr_1.forEach((v, i) => final_arr = [...final_arr, { "date": arr_1[i], "priceUsd_1": arr_2[i], "priceUsd_2": arr_3[i] }])
        this.setState({ new_arr: final_arr });
        // console.log(this.state.drop_item_id_1, this.state.drop_item_id_2);
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

    render() {

        return (
            <div className="QW">
                
                <div style={{backgroundColor:this.state.color}}>
                <br></br>
                
<span className='A'>
  <button class="btn btn-info" onClick={this.ds}><img src={pic} alt=";;" style={{width:"50px",height:"50px"}} /></button></span>
                <br></br>
                <h1 align="center" style={{color:"green"}}><b>COIN COMPARE</b></h1>
                
                <div className="AS">
                    <Dropdown >
                        <Dropdown.Toggle variant="info" style={{ width: "180px" }}>
                            {this.state.drop_item}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ height: "150px", overflow: "auto" }}>
                            {this.state.all_assests ? this.state.all_assests.map((coin, index) =>
                                <Dropdown.Item key={index} onClick={(e) => this.onclick_1(coin.name, coin.id)}>{coin.symbol + " - " + coin.name}</Dropdown.Item>
                            ) : "No data"}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div onClick={this.arr_put} className="col-md-1 btn btn-danger" style={{  left: "30px", top: "24px" }}><i data-test="fa" className="sc-gSAPjG vdkON fa fa-chart-line"></i>Compare</div>
                <div className="SA">
                    <Dropdown >
                        <Dropdown.Toggle variant="info" style={{ width: "180px" }}>
                            {this.state.drop_item_1}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ height: "150px", overflow: "auto" }}>
                            {this.state.all_assests ? this.state.all_assests.map((coin, index) =>
                                <Dropdown.Item onClick={(e) => this.onclick_2(coin.name, coin.id)}>{coin.symbol + " - " + coin.name}</Dropdown.Item>
                            ) : "No data"}

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="asas" >
                    <ComposedChart
                        width={1150}
                        height={600}
                        data={this.state.new_arr}
                        margin={{
                            top: 190,
                            right: 30,
                            left: 50,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis
                            dataKey="date"
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Bar dataKey="priceUsd_1" barSize={20} fill="#413ea" />
                        <Bar dataKey="priceUsd_2" barSize={20} fill="#413ea0" /> */}
                        <Area dataKey="priceUsd_1" barSize={20} fill="#56a832"  />
                        <Area dataKey="priceUsd_2" barSize={20} fill="#413ea0" />

                    </ComposedChart>
                </div>
            </div></div>

        );
    }
}