import React, { Component } from 'react'
import './hot.css'

export default class Hot extends Component {
    constructor(props){
        super(props)
        this.state={
            hotList:[]
        }
    }
    componentDidMount(){
        fetch('/home/getHotsRecommendList?city_id=0&rows=50&&version=5.1.4&referer=2')
        .then(response=>{
          return  response.json()
        })
        .then(res=>{
            console.log(res)
            let list = res.data.hots_show_list
            console.log(list)
            this.setState({
                hotList:list
            })
        })
    }
    render() {
        return (
            <div className="box4">
            <div className="one4">
                <p>热门演出</p><i className="iconfont icon-arrow-right"></i>
            </div>
            <div className="two4">
                <ul>
                    {
                        this.state.hotList.map(item=>{
                            return(
                                <li key={item.schedular_url}><img src={item.pic} alt="ooo"/>
                                <h3>{item.show_name}</h3></li> 
                            )
                        })
                    }
                
              
                </ul>
           </div>
            </div>
        )
    }
}
