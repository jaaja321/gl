import React, { useState } from 'react'
import Cart from './Cart'
import { BiSearch } from 'react-icons/bi'
import { FaMale , FaFemale } from 'react-icons/fa'
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {HiArrowUp} from 'react-icons/hi'

export default function Header(props) {

  let input = document.getElementById('input')
  let [cartshow, setCartshow] = useState(false)

  const search = () => {
    if (input.value === ''){
      input.select()
    }
  }
  
  let [text, setText] = useState('')
  let [empty, setEmpty] = useState(true)

  const type = (t) => {
    console.log(t)
    setText(t)
    props.search(t)
  }

  const head = () => {
    if (props.curcat === 'allC' && props.curstate === 'allG'){
      return 'Товары всех категорий'
    }
    if (props.curcat === 'allC' && props.curstate !== 'allG'){
      return `Все товары категории "${props.curstate}"`
    }
    if (props.curcat !== 'allC' && props.curstate === 'allG'){
      return `Все товары категории "${props.curcat}"`
    }
    return `Все товары категории "${props.curcat} ${props.curstate}"`
  }

  const cartpress = () => {
    setCartshow(!cartshow)
  }

  const list = (props) => {

  }

  return (
    <div className={`fixed z-[1001] ${cartshow && 'top-[-10%]'}`}>
      <div className={`z-[100000] ${props.open ? 'lg:w-[80%] md:w-[80%] md:left-[20%] lg:left-[20%] left-[15%]' : 'lg:w-[94%] md:w-[90%] lg:left-[6%] md:left-[10%] left-[0%] w-screen'} fixed right-0 top-[-100%] w-[80%] opacity-0 bg-white ${cartshow && 'top-[0%] opacity-100'} transition-all`}>
        <div onClick={() => cartpress()} className='absolute left-[1%] top-[1%] p-4 border border-black rounded-lg hover:bg-gray-800 transition-all' id='but-h'><HiArrowUp className='scale-[2]'/></div>
          <Cart addItem={props.addItem} curitems={props.curitems} delitem={props.delitem} className={`z-[70] mx-12 bg-white`}/>
      </div>
    <div className={`z-10 fixed top-0 ${props.open ? 'lg:w-[80%] md:w-[80%] lg:left-[20%] md:left-[20%] left-[100%]' : 'lg:w-[94%] md:w-[90%] lg:left-[6%] md:left-[10%] left-[15%]'} h-[10vh] bg-white right-0 flex justify-between border-b border-black ${cartshow && 'top-[-10%]'} transition-all`} id='header'>
      <div onClick={() => cartpress()} className={`p-3 ml-4 my-auto font-bold flex border border-black rounded-lg hover:bg-gray-800 transition-all`} id='but-h'>
        <RiShoppingBasket2Fill className='my-auto mr-2 mx-1 scale-[2]'/>
        <span className={`opacity-0 w-0 lg:opacity-100 lg:w-full`}>Корзина</span>
        <p className='font-bold relative'>({props.curitems.length})</p>
      </div>
      <p onClick={() => props.setOpen()} className={`text-center m-auto font-bold sm:opacity-100 sm:w-full opacity-0 w-0`}>{head()}</p>
      <div className='flex items-center'>
      <div className='flex my-auto'>
        <p onClick={() => props.setLang('ua')} className={`${props.lang.p == 'ua' ? 'opacity-100' : 'opacity-50'}`}>UA</p>
        <p>|</p>
        <p onClick={() => props.setLang('ru')} className={`${props.lang.p == 'ru' ? 'opacity-100' : 'opacity-50'}`}>RU</p>
      </div>
        <div className='mx-[1%] ml-[2%] my-auto flex'>
          <input onChange={(e) => type(e.target.value)} value={text} className='rounded-lg w-full border-2 border-gray-300 md:h-[6vh] xl:h-[7vh]' placeholder='Поиск' id='input'></input>
      </div>
      </div>
    </div>
    </div>
  )
}
