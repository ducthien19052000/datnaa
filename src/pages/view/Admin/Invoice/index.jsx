import { Button, Col, Row, Table } from "antd";
import Search from "antd/lib/input/Search";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as invoiceAction from "../../../../redux/Action/invoiceAction";
import "./index.css";
import InvoiceDetail from "./invoiceDetail";

const Invoice = ({ invoiceAct, litsInvoice }) => {
  const [isModal, setIsModal] = useState(false);
  const [id,setId] = useState()
  const handleOk = (e) => {
    setIsModal(false);
  };
  const handleCancel = (e) => {
    setIsModal(false);
  };
    const fetchEmployee = useCallback(() => {
        const { getData } = invoiceAct;
        getData();
      }, [invoiceAct]);
      useEffect(() => {
        fetchEmployee();
      }, [fetchEmployee,isModal]);
      console.log(litsInvoice)
      const showDetail=(id) =>{
        setIsModal(true);
        setId(id)
      }
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "",
    render: (text,record) => {
      if(record.status==="Chưa_sử_lý"){
      return <span style={{fontWeight:'bold'}}>{record.userEntity.name}</span>
      }
      else{
        return <span >{record.userEntity.name}</span>
      }
    },
    },
    {
      title: "Địa chỉ",
      dataIndex: "",
      render: (text,record) => {
        if(record.status==="Chưa_sử_lý"){
        return <span style={{fontWeight:'bold'}}>{record.deliveryAddress}</span>
        }
        else{
          return <span >{record.deliveryAddress}</span>
        }
      },
    },
    {
      title: "Email",
      dataIndex: "",
      render: (text,record) => {
        if(record.status==="Chưa_sử_lý"){
        return <span style={{fontWeight:'bold'}}>{record.userEntity.email}</span>
        }
        else{
          return <span >{record.userEntity.email}</span>
        }
      },
    

    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "",
      render: (text,record) => {
        if(record.status==="Chưa_sử_lý"){
        return <span style={{fontWeight:'bold'}}>{record.createdAt}</span>
        }
        else{
          return <span >{record.createdAt}</span>
        }
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "",
      render: (text,record) => {
        if(record.status==="Chưa_sử_lý"){
        return <span style={{fontWeight:'bold'}}>{record.status}</span>
        }
        else{
          return <span >{record.status}</span>
        }
      },
    },
    {
      title: "Hình thức thanh toán",
      dataIndex: "",
      render: (text,record) => {
        if(record.status==="Chưa_sử_lý"){
        return <span style={{fontWeight:'bold'}}>{record.paymentMethods}</span>
        }
        else{
          return <span >{record.paymentMethods}</span>
        }
      },
    },
   

    {
      title: "Action",
      dataIndex: "",
      with: "15%",
      key: "x",
      render: (text, record) => (
        <>
          {" "}
          <>
            <Button onClick= {()=>showDetail(record.id)}> Chi tiết</Button>
            {/* <Button  ><EditFilled /></Button> */}
          </>
        </>
      ),
    },
  ];

  return (
    <>
      <Row className="title-content-admin">
        <h4 className="title-h4">Invoice manager</h4>
      </Row>
      <Row className="site-layout-content-admin">
        <Col xs={24} lg={24}>
          <Row className="top-content-food">
            <Col xs={24} lg={12} className="col-add-food">
              
            </Col>
            <Col span={6}></Col>
            <Col xs={24} lg={5} className="col-search-food">
              <Search
                placeholder="input search text"
                size="large"
                enterButton
              />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={24}>
              <Table
                className="table-food-admin"
                columns={columns}
                expandable={{
                  expandedRowRender: (record) => (
                    <p style={{ margin: 0 }}>{record.name}</p>
                  ),
                }}
                dataSource={litsInvoice}
              />
            </Col>
          </Row>
          {isModal === true ? (
          <InvoiceDetail
          id={id}
          visible={isModal}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        ) : (
          ""
        )}
        </Col>
      </Row>
    </>
  );
};

Invoice.propTypes = {};
const mapStateToProps = (state) => {
  return {
    litsInvoice: state.invoiceData.lists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    invoiceAct: bindActionCreators(invoiceAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Invoice);
