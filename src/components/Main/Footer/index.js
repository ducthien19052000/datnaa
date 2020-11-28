import React from 'react'
import { Layout, Row, Image, Col } from 'antd';
import './index.css'

const Footer = () => {
    const { Footer } = Layout;
    return (
        <Footer className='footer-main'>
        <Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='row-footer'>
        <Col className="gutter-row" span={6}>
          <div ><h3 style={{color:'#fff'}}>Thông tin  </h3></div>
          <div >Về chúng tôi</div>
          <div >Chính sách bảo mật</div>
          <div >Hướng dẫn đặt hàng</div>
          
  
        </Col>
        <Col className="gutter-row" span={6}>
        <div ><h3 style={{color:'#fff'}}>Dịch vụ nổi bật </h3></div>
          <div >Món lẻ</div>
          <div>Combo</div>
        </Col>
        <Col className="gutter-row" span={6}>
        <div ><h3 style={{color:'#fff'}}>Hỗ trợ khách hàng </h3></div>
          <div >Câu hỏi thường gặp</div>
          <div>Phí giao hàng</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <Image  width={'40%'} src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-food-logo-designs-with-spoon-and-fork-png-image_4158238.jpg'/>
        </Col>
      </Row>
        </Row>
      </Footer>
    )
}

export default Footer
