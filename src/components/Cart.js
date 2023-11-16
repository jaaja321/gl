import React, { Component } from 'react'
import CartItem from './CartItem'

export class Cart extends Component {
  render() {
    return(
      <div className={`flex ${this.props.curitems.length === 0 ? 'h-[10vh]' : 'overflow-y-auto'} justify-center border-b border-b-black`}>
        {this.props.curitems.length > 0 ? 
        <div className='w-[100%] text-center pt-[8vh] max-h-[90vh]'>
            <p className='my-2 font-bold'>Если определились с покупкой,можете звонить и заказывать</p>
            <p className='mb-2 font-bold'>+380123918215</p>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-around mr-[2%] mt-2 '>
              {this.props.curitems.map(el => (
                <CartItem className='z-[80]' item={el} delitem={this.props.delitem} addItem={this.props.addItem} curitems={this.props.curitems}/>
              ))}
            </div>
          </div> : <div className='h-[10vh] flex'><p className='font-bold my-auto'>Вы не выбрали товар</p></div>}
      </div>
    )
  }
}

export default Cart