import React, { Component } from 'react'
import { MdOutlineSportsSoccer } from 'react-icons/md'

export class Category extends Component {
  render() {
    let Ico = <MdOutlineSportsSoccer />
    return (
        <li className='font-bold'>{Ico}{this.props.el.name}</li>
    )
  }
}

export default Category