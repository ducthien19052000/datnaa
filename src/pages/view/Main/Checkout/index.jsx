import { Col, Row, Steps } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../../../redux/Action/userAction';
import FirstStep from './FirstStep';
import FourStep from './FourStep';
import './index.css';
import SecondStep from './SecondStep';


var order_Detail = {};
localStorage.setItem('OrderDetail', JSON.stringify(order_Detail));

const { Step } = Steps;


const Checkout = ({userAct,user}) => {
 
    const [current, setCurrent] = React.useState(0);
    



  const steps = ['Thông tin khách hàng', 'Kiểm tra đơn hàng', 'Xác nhận & mua hàng'];
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <FirstStep current={current} steps={steps} setCurrent={setCurrent}/>;
      case 1:
        return <SecondStep current={current} steps={steps} setCurrent={setCurrent}/>;
      default:
        return <FourStep current={current} steps={steps} setCurrent={setCurrent}/>;
    }
  }


    return (
        <>
        <Row className='container-main-checkout' style={{margin:'24px',width:'100%',minHeight:'80vh',justifyContent:"center"}}>
            <Col xs={24} md={22} lg={22} xl={20} style={{maxWidth:'80%'}}>
            <Steps current={current} style={{padding:0}}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} style={{padding:0}}/>
          ))}
        </Steps>
            </Col>
            <Col xs={24} md={22} lg={22} xl={20} style={{maxWidth:'80%'}}>
            <div className="steps-content">
            {getStepContent(current)}
               </div>
            
            </Col>
           
        </Row>
       
      
      
      </>
    )
}
const  mapStateToProps= state =>{
    return {
       user: state.userData.lists
        
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return{
        userAct: bindActionCreators(userAction,dispatch),
    }
}
    

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
