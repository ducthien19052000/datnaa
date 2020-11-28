import { Col, Input, Modal, notification, Row } from "antd";
import confirm from "antd/lib/modal/confirm";

import React, { useState } from "react";

const EditCart = ({ item, visible, handleCancel ,onUpdatePrToCart}) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const onHandleChange=(e)=>{
    const { name, value } = e.target;
    setQuantity( 
         value
    )
        
  }
  const onUpdateToCart=(product,quantity)=>{
    confirm({
      title: "Bạn muốn cập nhật giỏ hàng?",
      content: `Sản phẩm :${product.productName} x ${quantity}`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
    onUpdatePrToCart(product,quantity)
    setQuantity(0)
        notification["success"]({
          message: "",
          duration: 2,
          description: "Cập nhật giỏ hàng thành công",
        });
    handleCancel()

      },
      onCancel() {},
    });
  
    
  }
  
  return (
    <>
      <Modal
        title={item.product.productName}
        visible={visible}
        footer={null}
        onCancel={handleCancel}
      >
        <div
          className="itemDetailCartQuantity"
          style={{ marginTop: 0, paddingTop: 0 }}
        >
          <div>
            <Row type="flex" className="rowCartChangeQuantity" style={{marginBottom:'20px'}}>
              <Col xs={24} md={12}>
                <div style={{ margin: "10px 0" }}>
                  <span className="spanPriceDetailItem">
                    {" "}
                    {item.product.price} VNĐ
                  </span>
                </div>
              </Col>
              <Col xs={24} md={12}>
               

                <span className="spanShowQuantity" >
                  <Input
                    className="inputShowQuantity"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    type="number"
                    min={1}
                    max={99}
                    value={quantity}
                    onChange={onHandleChange}
                  />
                </span>
                
              </Col>
            </Row>

            <Row className="cart__button">
              <span className="btn__label" onClick={()=>onUpdateToCart(item.product,quantity)}>Cập nhật</span>
            </Row>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditCart;
