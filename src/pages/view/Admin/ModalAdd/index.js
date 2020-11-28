import { Button, Form, Input, Modal, Select } from 'antd';
import React, { useRef } from 'react';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const ModalAddEmployee = ({ isModal, handleOk,category, handleCancel ,addFood}) => {
    // const [fileList, setFileList] = useState([
        
    //   ]);
    
    //   const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    //   };
    
    //   const onPreview = async file => {
    //     let src = file.url;
    //     if (!src) {
    //       src = await new Promise(resolve => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file.originFileObj);
    //         reader.onload = () => resolve(reader.result);
    //       });
    //     }
    //     const image = new Image();
    //     image.src = src;
    //     const imgWindow = window.open(src);
    //     imgWindow.document.write(image.outerHTML);
    //   };
    const formRef = useRef(null);
 
    const onFinish = user => {
        const data ={ ...user.product,status:'A'}
     
        
        addFood(data);
        
    };
    return (
        <Modal
            title="Add Food"
            visible={isModal}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer={null}
        >
            <Form  {...layout}  ref={formRef} name="nest-messages" onFinish={onFinish} >
            
                <Form.Item name={['product', 'productName']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['product', 'image']} label="Image"  rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['product', 'price']} label="Price"  rules={[{ required: true }]}>
                    <Input type='number'/>
                </Form.Item>
                <Form.Item name={['product', 'categoryId']} label="Group food" rules={[{ required: true }]}>
                      <Select >
                          {category.map((item,index)=>(
                                 <Select.Option value={item.id}>{item.categoryName}</Select.Option>
                          ))}
                    </Select>
                </Form.Item>
                <Form.Item name={['product', 'warehouses']} label="Số lượng"  rules={[{ required: true }]}>
                    <Input type='number'/>
                </Form.Item>
              
                        {/* <Form.Item name={['product', 'image']} label="Image" >
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && '+ Upload'}
                        </Upload>
                        </Form.Item> */}
                <Form.Item name={['product', 'description']} label="Description" >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item className="mt-3 " wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Add Food
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalAddEmployee;
