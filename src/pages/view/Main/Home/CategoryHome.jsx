import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import { Link } from 'react-router-dom'
import ProductItemHome from './ProductItemHome'

const CategoryHome = ({newProduct, onAddToCart}) => {
    return (
        <div className="site-layout-background-main-home">
             <Row style={{ marginLeft: "35px",marginTop:'20px' }}>
              <Row style={{ width: "100%", display: "block" }}>
                <h2 style={{ float: "left" }}>Món ngon</h2>
                <Link
                  to="/product"
                  type="button"
                  className="ant-btn ant-btn-dashed"
                  style={{
                    float: "right",
                    marginRight: "30px",
                    background: "#3ac5c9",
                  }}
                >
                  <span>Xem chi tiết</span>
                </Link>
              </Row>
              <Row className="row-food-home">
                {newProduct.map((food, index) => (
                  <ProductItemHome
                    product={food}
                    key={index}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </Row>

             

             
            </Row>
        </div>
    )
}

CategoryHome.propTypes = {

}

export default CategoryHome
