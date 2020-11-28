import { notification } from "antd";
import React from "react";
import { Redirect, Route } from "react-router-dom";




function PrivateRoute({ component: Component, ...rest }) {
 
  
    const authenticated = localStorage.getItem('authenticated')


  return (
    <>
    <Route
      {...rest}
      render={props =>{
        if(authenticated){
           
            return (<Component {...props} />)
        }
        else{
            
           
            notification["warning"]({
                message: "Thông báo",
                duration: 2,
                description: "Bạn cần đăng nhập để tiến hành đặt hàng",
              });
            return  <Redirect to="/"/>
        }
      }
      }
    />
 
      </>
     
  
    
    
  );
}

export default PrivateRoute;