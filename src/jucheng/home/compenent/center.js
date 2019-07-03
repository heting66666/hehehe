import React, { Component } from 'react'
import './center.css'

export default class Center extends Component {
    render() {
        return (
            <div className="box3">
                <div className="one3">
                    <ul>
                        <li>
                            <i className="iconfont icon-yanchanghui music"></i><span>演唱会</span>
                        </li>
                        <li>
                            <i className="iconfont icon-yinlehui music"></i><span>音乐会</span>
                        </li>
                        <li>
                            <i className="iconfont icon-screen-copy music"></i><span>舞台剧</span>
                        </li>
                        <li>
                            <i className="iconfont icon-yanchanghui music"></i><span>儿童剧</span>
                        </li>
                        <li>
                             <i className="iconfont icon-lianxuju1"></i><span>音乐剧</span>
                        </li>
                           
                    </ul>
                </div>
                <div className="two3">
                    <img src="http://image.juooo.com/group1/M00/02/64/rAoKmVyurWWASnGFAAMNnYeNyoc800.png" alt="img"/>
                </div>
                <div className="three3">
                    <ul className="ulone">
                       <li><div><h3>橙PLUS卡</h3><p>限时送<span>100元</span></p></div><div><i className="iconfont icon-qia"></i></div></li>
                       <li><div><h3>积分商城</h3><p>用积分<span>0元购票</span></p></div><div><i className="iconfont icon-shangchang"></i></div></li>
                    </ul>
                    <ul className="ultwo">
                       <li><div><h3>聚特惠</h3><p>优惠不止<span>一点点</span></p></div><div><i className="iconfont icon-qia"></i></div></li>
                       <li><div><h3>日历</h3><p>演出信息<span>一目了然</span></p></div><div><i className="iconfont icon-qia"></i></div></li>
                       <li><div><h3>橙PLUS卡</h3><p>限时送<span>100元</span></p></div><div><i className="iconfont icon-qia"></i></div></li>
                    </ul>
                </div>
            </div>
        )
    }
}
