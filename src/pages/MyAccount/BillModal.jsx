import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Modal, DatePicker, Select } from 'antd';
const { RangePicker } = DatePicker;
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const BillModal = ({ isModalOpen, setIsModalOpen }) => {
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Modal title="新增保单" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form>
                    <Form.Item
                        label="金额"
                        name="money"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="时间"
                        name="time"
                    >
                        <RangePicker picker="month" />
                    </Form.Item>
                    <Form.Item
                        label="币种"
                        name="coin"
                    >
                        <Select
                            defaultValue="USDC"
                            style={{
                                width: 120,
                            }}
                            options={[
                                {
                                    value: 'USDC',
                                    label: 'USDC',
                                },
                                {
                                    value: 'USDT',
                                    label: 'USDT',
                                },
                                {
                                    value: 'SOL',
                                    label: 'SOL',
                                },
                            ]}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default BillModal;