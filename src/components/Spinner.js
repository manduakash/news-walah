import React, { Component } from 'react'
import Spinner from '../images/Spinner.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='spinner text-center my-5'>
        <img src={Spinner} alt='loading' style={{height: "30px",width: "30px"}}/>
      </div>
    )
  }
}
