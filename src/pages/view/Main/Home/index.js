import { ShoppingCartOutlined } from "@ant-design/icons";
import {
  Alert,
  Badge,
  Button,
  Col,
  Image,
  notification,
  Row,
  Spin,
} from "antd";
import confirm from "antd/lib/modal/confirm";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { addToCart, removeToCart } from "../../../../redux/Action/cartAction";
import * as foodAction from "../../../../redux/Action/index";
import Cart from "../Cart";
import CategoryHome from "./CategoryHome";
import "./index.css";
import ProductItemHome from "./ProductItemHome";



const Home = ({
  foodAct,
  litsFoot,
  listGroup,
  AddToCart,
  cart,
  onDeletePrToCart,
}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  console.log(litsFoot);
  const fetchEmployee = useCallback(() => {
    const { getData } = foodAct;
    getData();
  }, [foodAct]);
  useEffect(() => {
    fetchEmployee();
  }, [fetchEmployee]);

  const newProduct = litsFoot.slice(litsFoot.length - 6, litsFoot.length);
  console.log(litsFoot);
  const onAddToCart = (product, quantity,topping) => {
    confirm({
      title: "Bạn muốn thêm sản phẩm vào giỏ hàng?",

      content: `Sản phẩm :${product.productName} x ${quantity}`,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        AddToCart(product, quantity,topping);
        notification["success"]({
          message: "",
          duration: 2,
          description: "Thêm sản phẩm thành công",
        });
      },
      onCancel() {},
    });
  };
  //showTotalCart
  const showQuantity = (cart) => {
    var quantity = 0;
    if (cart.length > 0) {
      for (var i = 0; i < cart.length; i++) {
        quantity += cart[i].quantity;
      }
      return quantity;
    }
  };

  if (newProduct.length === 0) {
    return (
      <Spin tip="Loading...">
        <Alert
          message="Thông báo"
          description="Đang tải dữ liệu vui lòng chờ."
          type="info"
        />
      </Spin>
    );
  } else {
    return (
      <>
        <>
          <Row>
            <Badge count={showQuantity(cart)} id="myBtn" overflowCount={10}>
              <Button
                shape="circle"
                style={{ background: "none", border: "none" }}
                onClick={showDrawer}
              >
                {" "}
                <ShoppingCartOutlined
                  style={{ fontSize: "30px", color: "#fff", margin: 0 }}
                />
              </Button>
            </Badge>

            <div className="carousel-home" style={{ margin: "0 auto" }}>
              <Image
                disabled
                style={{ width: "100%" }}
                src="https://rawcdn.githack.com/0967517236/imag-datn/0fc6d18e91b5f33324b6a1824756dece21d71b8e/img-carousel-home.JPG"
              />
            </div>
          </Row>

          <div >
            
            <CategoryHome newProduct={newProduct} onAddToCart={onAddToCart}/>
            <CategoryHome newProduct={newProduct}  onAddToCart={onAddToCart}/>
            <CategoryHome newProduct={newProduct}  onAddToCart={onAddToCart}/>
        <div className="site-layout-background-main-home">
            <section  className="section-courses" id="section-courses">
                <div className="u-center-text u-margin-bottom-big">
                  <h2 className="heading-secondary">
                    Thời gian quý báu của bạn
                  </h2>
                </div>
                <Row>
                  <Col span={8}>
                    <div className="card">
                      <div className="card__side card__side--front">
                        <div className="card__picture card__picture--1">
                          &nbsp;
                          {/*- KÍ TỰ RỖNG TRONG HTML */}
                        </div>
                        <div className="card__details">
                          <span>Ưu đãi cho bạn</span>
                        </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-1">
                        <div className="card__cta">
                          <div className="card__price-box">
                            <p className="card__price-only">
                              Khuyến mãi hằng ngày và nhiều món ngon chờ bạn.
                            </p>
                            {/* <p className="card__price-value">$16</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="card">
                      <div className="card__side card__side--front">
                        <div className="card__picture card__picture--2">
                          &nbsp;
                        </div>

                        <div className="card__details">
                          <span>Đảm bảo với bạn</span>
                        </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-2">
                        <div className="card__cta">
                          <div className="card__price-box">
                            <p className="card__price-only">
                              Không tính phí dịch vụ
                            </p>
                            <p className="card__price-only">
                              Chất lượng dich vụ tuyệt vời
                            </p>
                            <p className="card__price-only">
                              Giá đảm bảo: thanh toán với giá bằng với giá tại
                              nhà hàng
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div className="card">
                      <div className="card__side card__side--front">
                        <div className="card__picture card__picture--3">
                          &nbsp;
                        </div>
                       
                        <div className="card__details">
                        <span>Lợi ích của bạn</span>
                        </div>
                      </div>
                      <div className="card__side card__side--back card__side--back-3">
                        <div className="card__cta">
                          <div className="card__price-box">
                          <p className="card__price-only">
                              Giao hàng tận nơi
                            </p>
                            <p className="card__price-only">
                            Thanh toán online hoặc bằng tiền mặt
                            </p>
                            <p className="card__price-only">
                            Đặt món mọi lúc mọi nơi tại trang web
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </section>
              </div>
              {visible === true ? (
                <Cart visible={visible} onClose={onClose} />
              ) : (
                ""
              )}
          </div>
        </>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    litsFoot: state.foodData.lists,
    listGroup: state.groupData.lists,
    cart: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    foodAct: bindActionCreators(foodAction, dispatch),

    AddToCart: (product, quantity,topping) => {
      dispatch(addToCart(product, quantity,topping));
    },
    onDeletePrToCart: (product) => {
      dispatch(removeToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
