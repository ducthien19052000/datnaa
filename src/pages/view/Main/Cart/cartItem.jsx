import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons'
import { Button, Col, Image, Input, Modal, Row } from 'antd'
import React, { useState } from 'react'
import EditCart from './editCart'

const CartItem = ({item,onHandleRemoveCart,onUpdatePrToCart}) => {
    const [isModal, setIsModal] = useState(false)
    const [itemEdit,setItemEdit] = useState({})
    const handleOk = (e) => {
      setIsModal(false);
    };
    const handleCancel = (e) => {
      setIsModal(false);
    };
    const showModal = (item) => {
      setIsModal(true);
      setItemEdit(item)
    };
    console.log(item)
    return (
        <div>
            <Row>
                  <Col span={6} style={{ padding: "5px" }}>
                    <Image src={item.product.image} />
                  </Col>
                  <Col span={18}>
                    <Row style={{ margin: 0 }}>
                      <Col span={12}>
                        {" "}
                        <span style={{ fontSize: 16, fontWeight: 500 }}>
                          {item.product.productName} x{item.quantity}
                        </span>{" "}
                      </Col>
                      <Col span={12}>
                        <Row style={{ margin: 0 }}>
                          <span style={{ fontSize: 16, fontWeight: 500 }}>
                            {item.product.price}
                          </span>
                        </Row>
                        <Row style={{ margin: 0 }}>
                          <Button
                            onClick={()=>showModal(item)}
                            style={{ background: "none", border: "none" }}
                          >
                            {" "}
                            <EditTwoTone />
                          </Button>
                          <Button
                            onClick={() => onHandleRemoveCart(item.product)}
                            style={{ background: "none", border: "none" }}
                          >
                            {" "}
                            <DeleteTwoTone />
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  {isModal?<EditCart visible={isModal} handleCancel={handleCancel} onUpdatePrToCart={onUpdatePrToCart} item={itemEdit}/>:''}
                
                </Row>
               
        </div>
    )
}

export default CartItem
