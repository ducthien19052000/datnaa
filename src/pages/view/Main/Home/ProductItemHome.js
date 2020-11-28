import { Col, Row } from "antd";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";

ProductItemHome.propTypes = {};

function ProductItemHome({ product, onAddToCart }) {
  let history = useHistory();
  const showDetail = () => {
    history.push(`/food/${product.id}`);
  };
  return (
    <>
      <Col
        
        xs={24}
        lg={4}
        className="col-product-item"
     
      >
        <div className="product-item-wrap">
          <Row
            className="row-header-product-item"
            style={{ backgroundImage: `url(${product.image})`, margin: 0 }}
            onClick={showDetail}
          >
            {/* <Image src={product.image} /> */}
          </Row>
          <Row className="row-bot-product-item" style={{ margin: 0 }}>
            <span className="span-product-name-item" onClick={showDetail}>
              {product.productName}
            </span>
            <span className="span-product-item-price" onClick={showDetail}>{product.price} VNĐ</span>
            <span
              className="add-to-cart"
              onClick={() => onAddToCart(product, 1,[])}
            >
              {" "}
              <FaCartPlus size={20} />
            </span>
          </Row>
        </div>
      </Col>
    </>
  );
}

export default ProductItemHome;
