import { Col, Row, Spin } from "antd";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Loading from "../../../../components/Loading";

function ProductItem({ product,onAddToCart }) {
  let history = useHistory();
  const showDetail=()=>{
      history.push(`/food/${product.id}`)
    
  }
 

  if(product==={}){
    return <Spin/>
  }
  return (
    <>
   
    
     <Col
     
        xs={24}
        lg={6}
        className="col-product-item"
      
      >
        <div className="product-item-wrap">
          <Row  onClick={showDetail}
            className="row-header-product-item"
            style={{ backgroundImage: `url(${product.image})`, margin: 0 }}
          >
            {/* <Image src={product.image} /> */}
          </Row>
          <Row className="row-bot-product-item" style={{ margin: 0 }} >
            <span className="span-product-name-item"  onClick={showDetail}>
              {product.productName}
            </span>
            <span className='span-product-item-price'  onClick={showDetail}>{product.price}</span>
            <span className='add-to-cart' onClick={()=>onAddToCart(product,1,[])}> <FaCartPlus size={20}/></span>
          </Row>
        </div>
      
      </Col>

    </>
  );
}

export default ProductItem;
