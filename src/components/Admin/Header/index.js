import React from 'react'
import { Button, Col, Divider, Dropdown, Layout, Menu, Row } from 'antd';

import './index.css'
import Avatar from 'antd/lib/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';





const Header = () => {
    const { Header } = Layout;
    const menu = (
       <Row>
           <Col xs={24} lg={24}>
               <Row style={{width:'260px'}}>
                   <Col span={6}>
                       <Avatar icon={<UserOutlined />}/>
                   </Col>
                   <Col span={18}>
                       <p>Name</p>
                       <p>Email</p>
                       <Button type='primary' style={{borderRadius:'50px'}}>View Profile</Button>
                   </Col>

               </Row>
               <Divider style={{margin:'10px 0'}}/>
               <Row style={{padding:'0px 0px 5px 10px'}}>
                   <Button>Logout</Button>
               </Row>
           </Col>
       </Row>
      );
    return (
        <>
            <Header className="site-layout-background" style={{ padding: 0 ,margin:0,width:'100%'}} >
                <Row>
                    <Col xs={22} lg={22}></Col>
                    <Col xs={2} lg={2}>
                                <Dropdown  overlay={menu} trigger={['click']}>
                                <Avatar size={50} icon={<UserOutlined />} />
                                
                            </Dropdown>
                        
                    </Col>

                </Row>
            </Header>
       </>
    )
}

export default Header
