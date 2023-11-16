import React, { useEffect, useState } from 'react'
import Info from './Info'
import {RiShoppingBasket2Fill} from 'react-icons/ri'
import {AiOutlineInfo} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiOpenBook } from 'react-icons/gi'
import { PiBabyBold } from 'react-icons/pi'

export default function Item(props) {
    let [show, setShow] = useState(false)
    let [select, setSelect] = useState(false)
    let [text, setText] = useState('')
    let sel = <IoMdClose className='scale-150'/>
    let unsel = <RiShoppingBasket2Fill className='scale-150'/>

    let url = '1.png'
    const info = () => {
        setShow(!show)
        if (!show) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "auto"
        }
    }

    const addItem = () => {
      let isIn = false

      props.curitems.forEach(el => {
        if (el === props.item) {
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

  return (
    <div className='justify-between flex flex-col pb-2 mt-2 border-2 border-gray rounded-t-[10px] hover:border-black transition-all'>
        <div>
          <p></p>
          <img onClick={() => info()} className='w-full h-40 rounded-t-[10px]' src={props.item.img}></img>
          <p onClick={() => info()} className='mx-2'>{props.item.titleUa}</p>
        </div>
        <div className='mt-2 px-2 w-full inline-flex justify-between'>
        <div onClick={() => info()} className='p-4 border border-black rounded-lg hover:bg-gray-800 transition-all' id='but'><AiOutlineInfo className='scale-150'/></div>
            <p className='my-auto font-bold text-center'>{props.item.price} UAH</p>
            <div className='flex'>
              <div onClick={() => addItem()} className={`flex p-4 border border-black rounded-lg hover:bg-gray-800 transition-all ${props.item.selected && 'bg-gray-700'}`} id='but'>{props.item.selected ? sel : unsel}</div>
            </div>
        </div>
        {show ? <Info langP={props.langP} text={text} colors={props.colors} item={props.item} show={show} info={info} addItem={props.addItem} curitems={props.curitems} lang={props.lang}/> : null}
    </div>
  )
}
