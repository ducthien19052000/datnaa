import { CreditCardFilled, DeleteTwoTone, DollarCircleFilled, EditTwoTone } from "@ant-design/icons";
import { Button, Col, message, Row, Tabs } from "antd";
import React from "react";
import { connect } from "react-redux";
import { removeToCart } from "../../../../redux/Action/cartAction";

const { TabPane } = Tabs;
const SecondStep = ({ cart, current, setCurrent, steps, onDeletePrToCart }) => {
  const dataLocal = localStorage.getItem("OrderDetail");
  const orderDetail = dataLocal !== null ? JSON.parse(dataLocal) : null;
  const cartRequests = cart.map((item,index)=>{return {
    productId : item.product.id,
    quantity: item.quantity
  }})
  
  ///showTotalPrice
  const showTotal = (ct) => {
    var total = 0; 
    if (ct.length > 0) {
      for (var i = 0; i < ct.length; i++) {
        total += ct[i].product.price * ct[i].quantity;
      }
      return total;
    }
  };

  const next = () => {
    orderDetail.amountTotal = showTotal(cart);
    orderDetail.cartRequests= cartRequests
    orderDetail.paymentMethods = 'Thanh toán tiền mặt';
    setCurrent(current + 1);
    localStorage.setItem("OrderDetail", JSON.stringify(orderDetail));
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Row className="row-checkout-profile-user" style={{ margin: 0 }}>
        <Col xs={24} lg={17}>
          <div className="col-checkout-cart">
            <Row type="flex" className="checkoutCartHeader">
              <Col md={4} className="itemHeader"></Col>
              <Col md={5} className="itemHeader">
                <span className="nameItemHeaderCheckout">Tên món ăn</span>
              </Col>
              <Col md={4} className="itemHeader">
                <span className="nameItemHeaderCheckout">Giá</span>
              </Col>
              <Col md={4} className="itemHeader">
                <span className="nameItemHeaderCheckout">Số lượng</span>
              </Col>
              <Col md={4} className="itemHeader">
                <span className="nameItemHeaderCheckout">Thành tiền</span>
              </Col>
              <Col md={3} className="itemHeader">
                <span className="nameItemHeaderCheckout"></span>
              </Col>
            </Row>
            <Row className="bodyCheckoutCart">
              {cart.map((item, index) => (
                <Row className="overItem">
                  <Col md={4} className="itemBody">
                    <img src={item.product.image} style={{ width: "96px" }} />
                  </Col>
                  <Col md={5} className="itemBody">
                    <span className="spanItemCartBody">
                      {item.product.productName}
                    </span>
                  </Col>
                  <Col md={4} className="itemBody">
                    <span className="spanItemCartBody">
                      {" "}
                      {item.product.price} đ{" "}
                    </span>
                  </Col>
                  <Col md={4} className="itemBody">
                    <span className="spanItemCartBody">{item.quantity}</span>
                  </Col>
                  <Col md={4} className="itemBody">
                    <span className="spanItemCartBody">
                      {item.product.price * item.quantity} đ
                    </span>
                  </Col>
                  <Col md={3} className="itemBody">
                    <span className="spanItemCartBody">
                      <Button style={{ background: "none", border: "none" }}>
                        {" "}
                        <EditTwoTone />
                      </Button>
                      <Button
                        onClick={() => onDeletePrToCart(item.product)}
                        style={{ background: "none", border: "none" }}
                      >
                        {" "}
                        <DeleteTwoTone />
                      </Button>
                    </span>
                  </Col>
                </Row>
              ))}
            </Row>
          </div>
        </Col>
        <Col xs={24} md={7} style={{ background: "#fff" }}>
          <div className="col-method-checkout">
            <Row type="flex" className="checkoutCartHeader">
              <Col span={24} className="itemHeader">
                <span className="nameItemHeaderCheckout">
                  Phương thức thanh toán
                </span>
              </Col>
            </Row>
            <Row className="">
              <Row>
                <Col md={24} className="itemBody">
                  <Tabs type="card">
                    <TabPane
                      tab={
                        <span>
                          <CreditCardFilled />
                          Chuyển khoản
                        </span>
                      }
                      key="1"
                    >
                      Đang phát triển
                    </TabPane>
                    <TabPane tab={
                        <span>
                          <DollarCircleFilled />
                          Tiền mặt
                        </span>
                      } key="2">
                        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Xác nhận thanh toán
          </Button>
        )}
                    </TabPane>
                    
                  </Tabs>
                </Col>
              </Row>
            </Row>
          </div>

          <Row></Row>
        </Col>

        <Row className="subTotalCheckout">
          <Col xs={24} lg={12} style={{ textAlign: "left" }}>
            {" "}
            <span style={{ fontSize: "18px", fontWeight: "500" }}>
              Tổng chi phí
            </span>
          </Col>
          <Col xs={24} lg={12} style={{ textAlign: "right" }}>
            <span style={{ fontSize: "18px", fontWeight: "500" }}>
              {" "}
              {showTotal(cart)} VNĐ
            </span>
          </Col>
        </Row>
      </Row>
      <div className="steps-action">
        
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Thanh toán
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePrToCart: (product) => {
      dispatch(removeToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondStep);
