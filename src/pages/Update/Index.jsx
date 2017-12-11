'use strict';

import './style.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import IndexHeader from '../Common/IndexHeader';

class Update extends Component {
    // 构造函数
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="index update clearfix">
                <IndexHeader />
                <div className="list">
                    <ul>
                        <li><i>2017-10-10</i> 0.1.8 webpack</li>
                        <li><i>2017-09-28</i> 0.1.1 config</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Update;