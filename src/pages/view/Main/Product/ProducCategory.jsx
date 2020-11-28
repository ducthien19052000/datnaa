
import { Col, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Loading from '../../../../components/Loading'
import { addToCart, removeToCart } from '../../../../redux/Action/cartAction'
import * as categoryAction from '../../../../redux/Action/categoryAction'
import * as foodAction from '../../../../redux/Action/index'
import './index.css'
import ProductItem from './ProductItem'
function ProducCategory({foodAct,category,litsFoot,listGroup,AddToCart}) {
  const [product,setProduct] = useState([]);
  
    const fetchFood= useCallback(
        () => {
            
            const { getDataGroup } = foodAct;
        
        getDataGroup(category.id)
        },
        [category.id,foodAct],
    )
    useEffect(() => {
       
            fetchFood()
       
        
      }, [fetchFood]);

    
      useEffect(()=>{
          fetch(`https://website-fpoly-food.herokuapp.com/product/?productName=&status=&size=4&page=0&previous_page=0&categoryId=${category.id}`, {
        "method": "GET",
        "headers": new Headers({
          'Content-Type' : 'application/json',
          'Accept': '*/*'
      })
      })
      .then(response => response.json())
      .then(response => {
          console.log(response)
          setProduct(response.body.content)
      })
      .catch(err => { console.log(err); 
      });
         
        },[category.id])
if(litsFoot){
    // console.log(litsFoot)
}
  return (
    
    <div>
      {!category&&<Loading/>}
      {category&&
      <Row className="row-food-all" style={{ margin: '0 0 20px 0' }}>
      <Col span={24}>
        <Row>
          <Col flex={4}>
            <h4 className="name-cate-food">{category.categoryName}</h4>
          </Col>
          <Col flex={1} style={{ textAlign: "right" }}>
            {" "}
            <Link to={`/category/${category.id}`} className="btn-see-more">Xem thêm</Link>
          </Col>
        </Row>
        <Row style={{ margin:'0' }}>
         
          {product.map((item,index)=>(
            <ProductItem product={item} key={index} onAddToCart={AddToCart}/>
          ))} 
      
          
         </Row>
      </Col>
    </Row>}
    </div>
  );
}


const  mapStateToProps= state =>{
    // console.log(state.foodData.lists)
    return {
        
        litsFoot: state.foodData.lists,
        listGroup:state.groupData.lists,
        cart :state.cartData
        
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return{
        foodAct: bindActionCreators(foodAction,dispatch),
        categoryAct: bindActionCreators(categoryAction,dispatch),

        AddToCart:(product,quantity)=>{
            dispatch(addToCart(product,quantity))
          },
          onDeletePrToCart:(product)=>{
            dispatch(removeToCart(product))
          }
    }
    
  }
export default connect(mapStateToProps,mapDispatchToProps)(ProducCategory)

