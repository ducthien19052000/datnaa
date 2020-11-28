import { Col, Radio, Row } from 'antd'
import React from 'react'

const ThirdStep = props => {
    return (
        <>
             <Row className='row-checkout-profile-user' style={{margin:0}}>
    <Col xs={24} md={12} style={{padding:'36px',borderRight:'1px solid red'}}>
       <Row style={{margin:0,textAlign:'left'}} >
           <Col span={24} >
                <h1>Hình thức thanh toán</h1>
                <Radio.Group name="radiogroup" defaultValue={1}>
    <Radio value={1}>Thanh toán khi nhận hàng</Radio>
    <Radio value={2}>Thanh toán tại cửa hàng</Radio>
    <Radio value={3}>Thanh toán qua chuyển khoản</Radio>
   
  </Radio.Group>
         
           </Col>
       </Row>
    </Col>
    <Col  xs={24} md={12}  style={{padding:'36px'}}>
    <Row style={{margin:0,textAlign:'left'}} >
           <Col span={24} >
           <h1>Tiền thanh toán</h1>
           <h2 style={{fontWeight:500,fontSize:'20px',color:"green"}}>127491 VNĐ</h2>
           </Col>
       </Row>
    </Col>
</Row>
        </>
    )
}

ThirdStep.propTypes = {

}

export default ThirdStep
