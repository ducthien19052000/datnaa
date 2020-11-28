import React from 'react'
import { Layout, Breadcrumb } from 'antd';

import './index.css'
import Header from '../../components/Admin/Header';
import Slider from '../../components/Admin/Slider';
import Footer from '../../components/Admin/Footer';





const MainAdmin = ({children}) => {
  const {Content}=Layout
    return (
        <>
         
      <Layout>
        <Slider/>
        <Layout className="site-layout">
            <Header/>
        
          <Content
            style={{ margin: '16px' }}
           
          >
              {children}
            
          </Content>
          <Footer/>
        </Layout>
      </Layout>
       
        </>
    )
}

export default MainAdmin
