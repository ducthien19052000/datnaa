import {
  DeleteTwoTone,
  EditTwoTone,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { Button, Col, Image, Row, Select } from "antd";
import Search from "antd/lib/input/Search";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart, removeToCart } from "../../../../redux/Action/cartAction";
import * as categoryAction from "../../../../redux/Action/categoryAction";
import * as foodAction from "../../../../redux/Action/index";
import "./index.css";
import ProductCategory from "./ProducCategory.jsx";

const { Option } = Select;

const Product = ({ foodAct, categoryAct, litsFoot, listGroup, cart }) => {
  const fetchCategory = useCallback(() => {
    const { getDataCategory } = categoryAct;
    getDataCategory();
  }, [categoryAct]);
  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  return (
    <>
      <Row className="container-main-product">
        <Col span={22} style={{ margin: "0 auto" }}>
          <Row className="content-food">
            <h2>Menu của nhà hàng</h2>
          </Row>
          <Row style={{ background: "#eeeeee" }}>
            <Col span={8}>
              <Row style={{ margin: "20px" }}>
                <Col span={18} push={6}>
                  <Select defaultValue="Tất cả" style={{ width: 120 }}>
                    {listGroup.map((category, index) => (
                      <Option value={category.categoryName} key={index}>
                        {category.categoryName}
                      </Option>
                    ))}
                  </Select>
                </Col>
                <Col span={6} pull={18}>
                  Danh mục
                </Col>
              </Row>
            </Col>
            <Col span={8} offset={8}>
              <Row style={{ margin: "20px" }}>
                <Col span={16} offset={8}>
                  <Col>
                    <Search placeholder="input search food" enterButton />
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col span={18} className="menu-food-col">
              {listGroup.map((category, index) => (
                <ProductCategory category={category} key={index} />
              ))}
            </Col>
            <Col span={6}>
              <Row className="row-show-cart" style={{ margin: 0 }}>
                <Col span={24}>
                  <div
                    style={{
                      position: "absolute",
                      top: "-44px",
                      right: "0px",
                      backgroundColor: "rgb(235, 113, 0)",
                      borderRadius: "50px",
                      width: "80px",
                      height: "80px",
                      border: "12px solid white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingCartOutlined />
                  </div>
                  <Row className="cart__header">
                    <span>Số món</span>
                  </Row>
                  <Row>
                    <Col span={6} style={{ padding: "5px" }}>
                      <Image src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />
                    </Col>
                    <Col span={18}>
                      <Row style={{ margin: 0 }}>
                        <Col span={12}>
                          {" "}
                          <span style={{ fontSize: 16, fontWeight: 500 }}>
                            GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN x1
                          </span>{" "}
                        </Col>
                        <Col span={12}>
                          <Row style={{ margin: 0 }}>
                            <span style={{ fontSize: 16, fontWeight: 500 }}>
                              350.000 VNĐ
                            </span>
                          </Row>
                          <Row style={{ margin: 0 }}>
                            <Button
                              style={{ background: "none", border: "none" }}
                            >
                              {" "}
                              <EditTwoTone />
                            </Button>
                            <Button
                              style={{ background: "none", border: "none" }}
                            >
                              {" "}
                              <DeleteTwoTone />
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="row-price-cart">
                    <span className="cart__price-total">Tổng giá</span>

                    <span className="cart__price-total" span={16}>
                      900.000 đ
                    </span>
                  </Row>
                  <Row className="cart__button">
                      <span className="btn__label">Tiến hành đặt hàng</span>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.foodData.lists)
  return {
    litsFoot: state.foodData.lists,
    listGroup: state.groupData.lists,
    cart: state.cartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    foodAct: bindActionCreators(foodAction, dispatch),
    categoryAct: bindActionCreators(categoryAction, dispatch),

    AddToCart: (product, quantity) => {
      dispatch(addToCart(product, quantity));
    },
    onDeletePrToCart: (product) => {
      dispatch(removeToCart(product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
