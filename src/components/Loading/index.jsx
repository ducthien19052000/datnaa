import { Spin } from 'antd';
import React from 'react';
import './index.css'

function Loading(props) {
    return (
        <div className="example">
        <Spin />
      </div>
    );
}

export default Loading;