import React, { Component } from 'react'
import Swiper from 'swiper'
import './swiper.css'

export default class Swipper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerList: []
    }
  }
  componentDidMount() {
    // console.log(this.refs)
    // let container=this.refs[`swiper-container`]
    // let pagination=this.refs[`swiper-pagination`]
    // console.log(container)
    // console.log(pagination)


    fetch("/home/getSildeList?abbreviation=&limit=&&version=5.1.4&referer=2").then(
      response => {
        return response.json()
      }
    ).then(
      res => {
        console.log(res)
        let img = res.data.silde_list
        this.setState({
          bannerList: img
        })

        new Swiper('#swiper1', {
          observer: true,//修改swiper自己或子元素时，自动初始化swiper
          observeParents: true,//修改swiper的父元素时，自动初始化swiper
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项

          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          // 如果需要分页器
          pagination: {
            el: '#swiper-p1',
          },

          // 如果需要前进后退按钮
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },

          // 如果需要滚动条
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        })
      }
    )
  }
  render() {
    return (
      <div>
        <div className="swiper-container" id="swiper1">
          <div className="swiper-wrapper">
            {
              this.state.bannerList.map(item => {
                return (<div key={item.title} className="swiper-slide"><img src={item.touch_image_url} alt={item.title} style={{ width: '100%' }} /></div>)
              })
            }

          </div>

          <div className="swiper-pagination" id="swiper-p1"></div>

          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}

          {/* <div className="swiper-scrollbar"></div> */}
        </div>
      </div>
    )
  }
}
