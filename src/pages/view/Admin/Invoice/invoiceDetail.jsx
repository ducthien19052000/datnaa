import { Col, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'

const InvoiceDetail = ({visible, handleOk, handleCancel,id}) => {
    const [data,setData] = useState(null)
    useEffect(()=>{
      
        fetch(`https://website-fpoly-food.herokuapp.com/invoice/details/${id}`)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            
           setData(res.body)
            
            return res;
        })
        .catch(error => {
           
        })
      },[id])
      console.log(data)
    return (
        <Modal
            title="Chi tiết"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1200}
            footer={null}
        >
         {data&& <Row>
                <Col xs={24} md={6}>
                   <div className='invoice__detailInfoUser'>
                   <Row>
                        <h2>Thông tin khách hàng</h2>
                    </Row>

                     <p>{data.invoiceInfo.fullName}</p>
                   <Row >
                 <p style={{width:'100%',margin:0,fontWeight:'bold'}}>Email </p>
                     <p> {data.invoiceInfo.userEntity.email}</p>
                 </Row>
                 <Row >
                 <p style={{width:'100%',margin:0,fontWeight:'bold'}}>Giao tại </p>
                 <p> {data.invoiceInfo.deliveryAddress}</p>
                 </Row>
                 <Row >
                 <p style={{width:'100%',margin:0,fontWeight:'bold'}}>Phương thức thanh toán </p>
                   <p> {data.invoiceInfo.paymentMethods} </p>
                 </Row>
                 <Row >
                 <p style={{width:'100%',margin:0,fontWeight:'bold'}}>Thời gian đặt hàng </p>
                   <p> time</p>
                 </Row>
                 <Row >
                 <p style={{width:'100%',margin:0,fontWeight:'bold'}}>Ghi chú</p>
                      <p> {data.invoiceInfo.description}</p>
                 </Row>
                  
                   </div>
                    
                </Col>
                <Col xs={24} md={18}>
                <div className="col-checkout-cart">
            <Row type="flex" className="checkoutCartHeader">
              <Col md={4} className="itemHeader"></Col>
              <Col md={6} className="itemHeader">
                <span className="nameItemHeaderCheckout">Tên món ăn</span>
              </Col>
              <Col md={5} className="itemHeader">
                <span className="nameItemHeaderCheckout">Giá</span>
              </Col>
              <Col md={4} className="itemHeader">
                <span className="nameItemHeaderCheckout">Số lượng</span>
              </Col>
              <Col md={4} className="itemHeader">
                <span className="nameItemHeaderCheckout">Thành tiền</span>
              </Col>
              
            </Row>
            <Row className="bodyCheckoutCart">
          
               {data.cartProduct.map((item,index)=>(
                    <Row className="overItem" key={index}>
                    <Col md={4} className="itemBody">
                      <img src={item.productInfo.image} style={{ width: "96px" }} />
                    </Col>
                    <Col md={6} className="itemBody" style={{textAlign:'center'}}>
                      <span className="spanItemCartBody">
                        {item.productInfo.productName}
                      </span>
                    </Col>
                    <Col md={5} className="itemBody" style={{textAlign:'center'}}>
                      <span className="spanItemCartBody">
                        {item.price} VNĐ
                      </span>
                    </Col>
                    <Col md={4} className="itemBody" style={{textAlign:'center'}}>
               <span className="spanItemCartBody">{item.quantity}</span>
                    </Col>
                    <Col md={4} className="itemBody" style={{textAlign:'center'}}>
                      <span className="spanItemCartBody" >
                      {item.amount} VNĐ
                      </span>
                    </Col>
                   
                  </Row>
               ))}
           
            </Row>
          </div>
                </Col>
            </Row>}
            {data===null&&<></  >}
          
        </Modal>
    )
}

export default InvoiceDetail
