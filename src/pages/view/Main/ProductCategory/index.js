import { DeleteTwoTone, EditTwoTone, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Col, Image, Pagination, Row, Select, Spin } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { addToCart, removeToCart } from '../../../../redux/Action/cartAction'
import * as categoryAction from '../../../../redux/Action/categoryAction'
import * as foodAction from '../../../../redux/Action/index'
import ProductItem from '../Product/ProductItem'
import './index.css'

const { Option } = Select;

const Category = ({foodAct,categoryAct,litsFoot,listGroup,cart,AddToCart}) => {
        let {id} = useParams();
        const [current,setCurrent] = useState(1)
        const [currentCateFood,setCurrentCateFood] = useState([])
        const [nameCate,setNameCate] = useState('')
        const page = current-1;
    
      const fetchCategory= useCallback(
        () => {
            const { getDataCategory } = categoryAct;
            getDataCategory();
        },
        [categoryAct],
    )
    useEffect(()=>{
      fetch(`https://website-fpoly-food.herokuapp.com/product/?productName=&status=&categoryId=${id}&size=10&page=0`, {
    "method": "GET",
    "headers": new Headers({
      'Accept': '*/*'
  })
  })
  .then(response => response.json())
  .then(response => {
      console.log(response)
      setCurrentCateFood(response.body.content)
  })
  .catch(err => { console.log(err); 
  });
     
    },[id])
    const onChange = page=>{
     
        setCurrent(page)
   
    } 
    useEffect(() => {
    
        fetchCategory();
      }, [fetchCategory]);
  
        const fetchFood= useCallback(
            () => {
                
                const { getDataGroup } = foodAct;
          
                getDataGroup(id,page)
            
            },
            [id,foodAct,page],
        )
        
        useEffect(() => {
           
                fetchFood()
           
            
          }, [fetchFood]);
      console.log(litsFoot)
          useEffect(()=>{
      
            fetch(`https://website-fpoly-food.herokuapp.com/category/${id}`)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
              
                setNameCate(res.body.categoryName)
                
                return res;
            })
            .catch(error => {
               
            })
          },[id])
       if(nameCate===''){
           return <Spin/>
       }
    
  else{
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
                  <Select defaultValue={nameCate} style={{ width: 120 }}>
                    {listGroup.map((category, index) => (
                        
                      <Option value={category.categoryName} key={index}>
                          <Link to={`/category/${category.id}`}>
                          {category.categoryName}
                          </Link>
                       
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
            <Row className="row-food-all" style={{ margin: '0 0 20px 0' }}>
      <Col span={24}>
        <Row style={{ margin:'0' }}>
            {litsFoot.length===0&&<Spin/>}
         
          {litsFoot.map((item,index)=>(
            <ProductItem product={item} key={index}  page={current} onAddToCart={AddToCart}/>
          ))} 
      
          
         </Row>
         <Row>
         <Pagination current={current} onChange={onChange} total={currentCateFood.length}  pageSize={4}  />
         </Row>
      </Col>
    </Row>
           
              
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
    )
  }
}

const  mapStateToProps= state =>{
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
export default connect(mapStateToProps,mapDispatchToProps)(Category)
