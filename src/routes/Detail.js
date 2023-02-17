import styled from 'styled-components';

// let YellowBtn = styled.button`
//     background : yellow;
//     color : black;
//     padding : 10px;
// `

// let Box = styled.div`
//     background : grey;
//     padding : 20px;
// `

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


function Detail(props) {

    useEffect(() => {
        console.log('안녕')
    })

    let [count, setCount] = useState(0)

    let { id } = useParams();
    let findGoods = props.shoes.find((data) => { return data.id == id })

    return (
        <div className="container">
            <div className='alert alert-warning'>
                2초이내 구매시 할인
            </div>
            {count}
            <button onClick={() => { setCount(count + 1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + ((findGoods.id) + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findGoods.title}</h4>
                    <p>{findGoods.content}</p>
                    <p>{findGoods.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;