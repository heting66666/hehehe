import React, { Component } from 'react'
import  {Input} from 'antd'
import './search.css'
export default class Search extends Component {
    render() {
        return (
            <div  className="searchBox">
                <div className="one">
                    <i className="iconfont icon-location"></i>全国
                </div>
                <div className="two">
                    <Input placeholder="搜素热门演出"/>
                </div>
                <div className="three">
                    <i className="iconfont icon-fenxiang"></i>
                </div>
            </div>
        )
    }
}
