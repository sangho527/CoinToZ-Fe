import * as React from 'react';
import {useState} from "react";
import styles from "./Payment.css";
import axios from "axios";

export default function Payment(){

    const [side, setSide] = useState('');
    const [ordType, setOrdType] = useState('');
    const [market, setMarket] = useState('');
    const [volume, setVolume] = useState('');
    const [price, setPrice] = useState('');

    const order = async () => {

        axios
            .get('http://ec2-52-78-23-203.ap-northeast-2.compute.amazonaws.com:8080/getMarket', {
                // side: side,
                // ordType: ordType,
                // market: market,
                // volume: volume,
                // price: price,
            })
            .then(response => {
                console.log('User profile', response.data);
            })
            .catch(error => {
                console.log('주문이 취소되었습니다.', error.response.data);
            });
    }


return (
    <div className={"page"}>
        <div className={"title"}>
            거래하기
        </div>

        <div className={"request"}>
            <div className={"inputTitle"}>주문종류</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                       placeholder={"매수/매도"}
                       value={side}
                       onChange={(e)=>setSide(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>주문타입</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"지정/시장/예약"}
                value={ordType}
                       onChange={(e)=>setOrdType(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>코인</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"예) KRW=BTC"}
                value={market}
                       onChange={(e)=>setMarket(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>수량</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"예) 1.00"}
                value={volume}
                       onChange={(e)=>setVolume(e.target.value)}
                />
            </div>

            <div className={"inputTitle"}>가격</div>
            <div className={"inputWrap"}>
                <input className={"input"}
                placeholder={"최소주문금액  5,000 KRW"}
                value={price}
                       onChange={(e)=>setPrice(e.target.value)}
                />
            </div>

        </div>

        <div>
            <button className={"bottomButton"}
            onClick={order}>
                주문하기
            </button>
        </div>
    </div>
        );
}








