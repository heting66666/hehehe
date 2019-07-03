import React, { Component } from 'react'
import './index.css'
import Search  from './compenent/search'
import Swipper from './compenent/swipper'

export default class Home extends Component {
    render() {
        return (
            <div className="box">
            <div className="contain">
               <Search/>
               <Swipper/>
            </div>
            </div>
        )
    }
}
