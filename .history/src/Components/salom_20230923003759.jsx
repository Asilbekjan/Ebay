import { SettingOutlined } from '@ant-design/icons';
import React from 'react';
import { Cascader, InputNumber, Select, Space } from 'antd';
const { Option } = Select;
const selectBefore = (
    <Select
        defaultValue="add"
        style={{
            width: 60,
        }}
    >
        <Option value="add">+</Option>
        <Option value="minus">-</Option>
    </Select>
);
const selectAfter = (
    <Select
        defaultValue="USD"
        style={{
            width: 60,
        }}
    >
        <Option value="USD">$</Option>
        <Option value="EUR">€</Option>
        <Option value="GBP">£</Option>
        <Option value="CNY">¥</Option>
    </Select>
);
const Salom = () => (
);
export default Salom;