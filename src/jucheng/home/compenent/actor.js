import React, { Component } from 'react'
import Swiper from 'swiper';
import './actor.css'

export default class Actor extends Component {
    constructor(props){
        super(props)
        this.state={
            actorList:[]
        }
    }
    componentDidMount(){
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop:false
          });
      
       fetch('/home/getTourRecommendList?city_id=0&rows=6&&version=5.1.4&referer=2')
       .then(response=>{
           return response.json()
       })
       .then(res=>{
           console.log(res)
           let list = res.data.tour_show_list
           this.setState({
               actorList:list
           })
       })
    }
    render() {
        return (
            <div className="box5">
                <div className="one5">
                <p>巡回演出</p><i className="iconfont icon-arrow-right"></i>
                </div>
                <div className="swiper-container">
                <div className="swiper-wrapper">
                {
                    this.state.actorList.map(item=>{
                        return(
                            <div className="swiper-slide"><img src={item.pic} alt="ppp"/><p>{item.show_name}</p></div> 
                        )
                    })
                }
                
               </div> 
               </div>
            </div>
        )
    }
}
