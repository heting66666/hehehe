import React, { Component } from 'react'
import './index.css'
import Search  from './compenent/search'
import Swipper from './compenent/swipper'
import Center from './compenent/center'
import Hot from './compenent/hot'
import Actor from './compenent/actor'

export default class Home extends Component {
    render() {
        return (
            <div className="box">
            <div className="contain">
               <Search/>
               <Swipper/>
               <Center/>
               <Hot/>
               <Actor/>
            </div>
            </div>
        )
    }
}
