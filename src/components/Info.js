import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import { RiShoppingBasket2Fill } from 'react-icons/ri'

export default function Info(props) {

  let [select, setSelect] = useState(props.item.selected)
  let [text, setText] = useState('')

  const addItem = () => {
    let isIn = false

    props.curitems.forEach(el => {
      if (el.id === props.item.id) {
        isIn = true
      }
    })

    console.log(props.curitems.includes(props.item))

    if (isIn) {
      props.item.selected = false
    } else {
      props.item.selected = true
    }

    setSelect(!select)
    props.addItem(props.item)
    console.log(props.item)
  }

  const sex = () => {
    if (props.item.sex){
      return props.item.sex
    }
    return "Не обозначен"
  }

  return (
    <div className='fixed overflow-auto z-[9000000] top-0 left-0 w-full h-full backdrop-blur-sm'>
    <div className='fixed z-[90] px-2 left-[5%] top-[8%] w-[90%] border border-black bg-white'>
        <div className='py-2 flex'>
        <img className='w-[60%] h-[80vh]' src={props.item.img} id='info-img'></img>
        <div className='flex flex-col justify-center w-[100%]'>
          <ul className='h-[100%] mx-[10%] mr-[10vh]'>
            <li className='font-bold text-[98%] border-b border-black text-center'>{props.item.title}</li>
            <li><span className='text-red-800'>{props.lang.cat}:</span> {props.item.cat}</li>
            <li><span className='text-red-800'>{props.lang.sex}:</span> {sex()}</li>
            <li><span className='text-red-800'>{props.lang.col}:</span> {props.item.col}</li>
            <li><span className='text-red-800'>{props.lang.isIn}:</span> {props.item.isin}</li>
            <li><span className='text-red-800'>{props.lang.id}:</span> {props.item.id}</li>
          </ul>
          <p className='font-bold mx-auto'>{props.lang.price}: {props.item.price}$</p>
          <p onClick={() => addItem(props.item)} className={`flex justify-center p-4 ml-2 border border-black rounded-lg hover:bg-gray-800 transition-all ${select && 'bg-gray-700'}`}><span className={`mx-2 font-bold`}>{`${!select ? 'Добавить в корзину' : 'Убрать из корзины'}`}</span></p>
        </div>
        <div className='absolute right-2 p-4 border border-black rounded-lg hover:bg-gray-800 transition-all' id='but'><IoMdClose onClick={() => props.info()} className='scale-[2]'/></div>
        </div>
    </div>
    </div>
  )
}
