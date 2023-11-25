import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import { RiShoppingBasket2Fill } from 'react-icons/ri'
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa";

export default function Info(props) {

  let [select, setSelect] = useState(props.item.selected)
  let [text, setText] = useState('')
  let [im, setIm] = useState(0)

  const addItem = () => {
    let isIn = false

    props.curitems.forEach(el => {
      if (el.id === props.item.id) {
        isIn = true
      }
    })

    console.log(props.curitems.includes(props.item))

    if (isIn) {
      if (props.ci){
        document.body.style.overflow = "auto"
      }
      props.item.selected = false
    } else {
      props.item.selected = true
    }

    setSelect(!select)
    props.addItem(props.item)
    console.log(props.item)
  }

  const title = () => {
    console.log(props.langP)
    if (props.langP == 'ru'){
      return props.item.title
    } else {
      return props.item.titleUa
    }
  }

  const sex = () => {
    if (props.item.sex){
      return props.item.sex
    }
    return "Не обозначен"
  }

  const scr = (w) => {
    let max = props.item.img.length
    if (w == 0){
      if (im == 0){
        setIm(max - 1)
      } else {
        setIm(im -= 1)
      }
    } else {
      if (im == max - 1){
        setIm(0)
      } else {
        setIm(im += 1)
      }
    }
  }

  return (
    <div className='fixed overflow-auto z-[9000000] top-0 left-0 w-full h-full backdrop-blur-sm'>
    <div className='fixed z-[90] px-2 left-[5%] top-[8%] w-[90%] border border-black bg-white'>
        <div className='py-2 flex' id={`info-b`}>
        <div className='absolute right-2 p-4 border border-black rounded-lg hover:bg-gray-800 transition-all' id='but'><IoMdClose onClick={() => props.info()} className='scale-[2]'/></div>
        <div className='flex z-[99090990]' id='info-img'>
          <div onClick={() => scr(0)} className='my-auto scale-[1.5] hover:scale-[2] duration-150 transition-all'><FaChevronLeft/></div>
          <img className='my-auto select-none' src={props.item.img[im]}></img>
          <div onClick={() => scr(1)} className='my-auto scale-[1.5] hover:scale-[2] duration-150 transition-all'><FaChevronRight/></div>
        </div>
        <div className='flex flex-col justify-center w-[100%]'>
          <ul className='h-[100%] mx-[10%]'>
            <li className='font-bold text-[98%]  text-center'>{title()}</li>
            <hr className=''></hr>
            <li><span className='text-red-800'>{props.lang.cat}:</span> {props.item.cat}</li>
            <li><span className='text-red-800'>{props.lang.sex}:</span> {sex()}</li>
            <li><span className='text-red-800'>{props.lang.col}:</span> {props.item.col}</li>
            <li><span className='text-red-800'>{props.lang.isIn}:</span> {props.item.isin}</li>
            <li><span className='text-red-800'>{props.lang.id}:</span> {props.item.id}</li>
          </ul>
          <p className='font-bold mx-auto'>{props.lang.price}: {props.item.price}$</p>
          <p onClick={() => addItem(props.item)} className={`flex text-center w-60 mx-auto justify-center p-4 border border-black rounded-lg hover:bg-gray-800 transition-all ${select && 'bg-gray-700'}`}><span className={`mx-2 font-bold`}>{`${!select ? 'Добавить в корзину' : 'Убрать из корзины'}`}</span></p>
        </div>
        </div>
    </div>
    </div>
  )
}
