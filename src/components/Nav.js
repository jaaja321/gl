import React, { Component } from 'react'
import Category from './Category'
import {HiMenu} from 'react-icons/hi'
import { MdOutlineSportsSoccer } from 'react-icons/md'
import { GiOpenBook, GiThunderSkull } from 'react-icons/gi'
import { PiBabyBold } from 'react-icons/pi'
import { HiSun } from 'react-icons/hi2'
import { FaMale, FaFemale } from 'react-icons/fa'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {IoMdCheckmark} from 'react-icons/io'
import {IoMdClose} from 'react-icons/io'

export class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      fil: [],
      open: false,
      ocol: false,
      ocat: false,
      curcat: 'allC',
      curstate: 'allG',
      curcol: 'allCol',
      colors: [
        {color: 'bg-black',
        sel: false},
        {color: 'bg-white',
        sel: false},
        {color: 'bg-red-500',
        sel: false},
        {color: 'bg-green-500',
        sel: false},
        {color: 'bg-blue-500',
        sel: false},
        {color: 'bg-purple-500',
        sel: false},
    ],
    }
    this.stateCheck = this.stateCheck.bind(this)
    this.catCheck = this.catCheck.bind(this)
    this.fil = this.fil.bind(this)
  }

  stateCheck(state){
    console.log(state,this.state.curstate)
    if (state === this.state.curstate){
      this.setState({curstate: 'allG'})
      this.allCheck(this.state.curcat, 'allG', this.state.curcol)
      return
    } else {
      this.setState({curstate: state})
    }
    this.allCheck(this.state.curcat, state, this.state.curcol)
  }

  catCheck(cat){
    console.log(cat,this.state.curstate)
    this.setState({curcat: cat})
    this.allCheck(cat, this.state.curstate, this.state.curcol)
  }

  allCheck(cat, state, col){
    this.setState({curstate: state})
    this.setState({curcat: cat})
    this.setState({curcol: col})
    console.log(cat, state, col)
    this.props.allCheck(cat, state, col)
  }
  
  fil(i,n){
    let arr = this.props.fil
    arr[n] = i
    if (i == 'del'){
      arr = []
    }
    console.log(arr)
    this.setState({fil: arr})
    this.props.allCheck(arr)
  }

  render() {
    return (
      <nav className={`z-[1000] fixed duration-300 flex flex-col left-0 top-0 ${this.props.open ? 'lg:w-[30%] md:w-[35%] w-[100%]' : 'lg:w-[6%] md:w-[10%] w-[15%] h-[10vh]'} bg-white border-r border-black`} id={`${this.props.open ? 'header-ny' : 'header-nn'}`}>
        <div className='z-[900] flex h-[10vh] border-b justify-around border-black' id='h-nav'>
          <p className='scale-0 w-0'>help</p>
            <div onClick={() => this.props.setOpen()} className='mx-2 p-4 my-auto border border-black rounded-lg transition-all sm:hover:bg-gray-800' id='but-hn'><HiMenu className='scale-[2]'/></div>
            <p className={`my-auto font-bold duration-300 ${this.props.open ? 'scale-1 w-full' : 'scale-0 w-0'}`}>LuxOchki</p>
        </div>
        <div className={`duration-300 overflow-y-auto ${!this.props.open ? 'translate-x-[-300%] h-0 opacity-0' : 'translate-x-[0%] h-[90vh] opacity-100'}`} id={`${!this.props.open ? 'e' : 'n'}`}>

      <div className={`absolute text-center bg-white w-full top-[0vh] transition-all duration-300 ${this.state.ocat ? "translate-x-[0%]" : "translate-x-[-100%]"} overflow-hidden`}>
        <div onClick={() => this.setState({ocat: !this.state.ocat})} className={`justify-center duration-100 mx-2 my-1 flex border border-black p-1 sm:hover:bg-gray-700`}>
          <IoMdClose size={30} className=''/>
          <span className={`font-bold my-auto`}>Назад</span>
        </div>
        {this.props.allcat.map((el) => (
                  <div className='mx-2 my-1'>
                  <div onClick={() => this.fil(el,0)} className={`flex border justify-center duration-100 border-black p-1 ${this.state.fil[0] === el ? "bg-gray-700" : ""} sm:hover:bg-gray-700`}>
                    <span className={`font-bold my-auto`}>{el}</span>
                  </div>
                </div>
        ))}
        
      </div>

      <div className={`absolute text-center bg-white w-full top-[0vh] transition-all duration-300 ${this.state.ocol ? "translate-x-[0%]" : "translate-x-[-100%]"} overflow-hidden`}>
        <div onClick={() => this.setState({ocol: !this.state.ocol})} className={`justify-center duration-100 mx-2 my-1 flex border border-black p-1 sm:hover:bg-gray-700`}>
          <IoMdClose size={30} className=''/>
          <span className={`font-bold my-auto`}>Назад</span>
        </div>
        <div onClick={() => this.fil('',2)} className={`justify-center duration-100 mx-2 my-1 flex border border-black p-1 ${!this.state.fil[2] ? "bg-gray-700" : ""} sm:hover:bg-gray-700`}>
          <IoColorPaletteOutline size={30} className=''/>
          <span className={`font-bold my-auto`}>Все цвета</span>
        </div>
        {this.props.colors.map((el) => (
                  <div className='mx-2 my-1'>
                  <div onClick={() => this.fil(el,2)} className={`flex border justify-center duration-100 border-black p-1 ${this.state.fil[2] === el ? "bg-gray-700" : ""} sm:hover:bg-gray-700`}>
                    <span className={`font-bold my-auto`}>{el}</span>
                  </div>
                </div>
        ))}
        
      </div>
      <div onClick={() => this.setState({ocat: !this.state.ocat})} className={`mx-2 my-1 flex border border-black p-1 ${this.state.ocat ? "bg-gray-700" : ""} sm:hover:bg-gray-700`}>
          <IoColorPaletteOutline size={30}/>
          <span className={`font-bold my-auto`}>{this.props.langP == 'ru' ? 'Категории' : 'Категорії'}</span>
        </div>
      <div onClick={() => this.setState({ocol: !this.state.ocol})} className={`mx-2 my-1 flex border border-black p-1 ${this.state.ocol ? "bg-gray-700" : ""} sm:hover:bg-gray-700`}>
          <IoColorPaletteOutline size={30}/>
          <span className={`font-bold my-auto`}>{this.props.langP == 'ru' ? 'Цвет' : 'Колір'}</span>
        </div>
        <div onClick={() => this.fil('del')} className={`mx-2 my-1 flex border border-black p-1 ${this.state.ocol ? "bg-gray-700" : ""} sm:hover:bg-gray-700`}>
          <IoColorPaletteOutline size={30}/>
          <span className={`font-bold my-auto`}>{this.props.langP == 'ru' ? 'Удалить фильтры' : 'Видалити фільтри'}</span>
        </div>



        </div>
      </nav>
    )
  }
}

export default Nav