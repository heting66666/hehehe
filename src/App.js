import  React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  import './index.css'
  import './style/reset.css'
  import Home from './jucheng/home'
  import Film from './jucheng/film'
  import Ticket from './jucheng/ticket'
  import Myself from './jucheng/myself'
 
class App extends React.Component{
    render(){
        return (
           <div>
               <Router>
                   
                   <div className="box">
                   <div>
                    <Route path='/home' component={Home} />
                    <Route path='/film' component={Film} />
                    <Route path='/ticket' component={Ticket} />
                    <Route path='/myself' component={Myself} />
                    </div>
                   
                    <ul className="nav">
                        <li><Link to='/home'><span className="iconfont icon-shouye"></span><span>首页</span></Link></li>
                        <li><Link to='/film'><span className="iconfont icon-yingyuanxinxizhoubiansheshi"></span><span>影院</span></Link></li>
                        <li><Link to='/ticket'><span className="iconfont icon-piao"></span><span>票价</span></Link></li>
                        <li><Link to='/myself'><span className="iconfont icon-iconfuzhi"></span><span>我的</span></Link></li>
                    </ul>
                    </div>
                    
                </Router>
           </div>
        )
    }
}
export default App