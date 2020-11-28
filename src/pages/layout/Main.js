import React from 'react'
import { Layout  } from 'antd';
import Header from '../../components/Main/Header';
import Footer from '../../components/Main/Footer';


const Main = ({children}) => {
    
    const { Content } = Layout;
    return (
        <Layout>
            <Header/>
        <Content className="site-layout" style={{width: '100%' , maxWidth:'1745px' ,margin:'auto',marginBottom:'30px',position:"relative" }}>
        
        {children }
      
        </Content>
        <Footer/>
      </Layout>
    )
}

export default Main
