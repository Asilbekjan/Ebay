import React, { useState } from 'react';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Upload } from 'antd';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { PlusOutlined } from '@ant-design/icons';



const { Option } = Select;
const ProductAdd = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };


    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('$');

    const handleAmountChange = (value) => {
        setAmount(value);
    };

    const handleCurrencyChange = (value) => {
        setCurrency(value);
    };




    return (
        <>
            <div onClick={showDrawer} className='cursor-pointer'>
                <AiOutlinePlusCircle className='text-[25px] text-white'/>
            </div>
            <Drawer
                title="Add a Free Product"
                width={720}
                placement="left"
                onClose={onClose}
                open={open}
                bodyStyle={{
                    paddingBottom: 80,
                }}
                extra={
                    <Space>
                        <Button  type="primary" className='bg-blue-400'>
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter user name',
                                    },
                                ]}
                            >
                                <Input placeholder="Please enter user name" />
                            </Form.Item>
                        </Col>
                        <Form.Item label="Upload" valuePropName="fileList">
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </div>
                            </Upload>
                        </Form.Item>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="owner"
                                label="Owner"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select an owner',
                                    },
                                ]}
                            >
                                <Select placeholder="Please select an owner">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="type"
                                label="Type"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the type',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the type">
                                    <Option value="private">Private</Option>
                                    <Option value="public">Public</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="approver"
                                label="Approver"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please choose the approver',
                                    },
                                ]}
                            >
                                <Select placeholder="Please choose the approver">
                                    <Option value="Komponiya">Komponiya</Option>
                                    <Option value="Shaxsiy`">Shaxsiy</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter url description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter url description" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};
export default ProductAdd;