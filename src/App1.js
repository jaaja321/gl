import './main.css';
import './style.css';
import { list } from './list.js'
import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import { MdOutlineSportsSoccer } from 'react-icons/md'

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      curcat: 'allC',
      curstate: 'allG',
      curcol: '',
      sex: '',
      itemsCat: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
          color: 'black',
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "Спортивные",
          price: "50",
          sex: "Мужские",
          color: 'white',
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "Детские",
          price: "149.99",
          sex: "Мужские",
          color: 'red',
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Солнцезащитные",
          price: "500",
          sex: "Мужские",
          color: 'blue',
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Спортивные",
          price: "580",
          sex: "Женские",
          color: 'green',
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Для чтения",
          price: "520",
          sex: "Мужские",
          color: 'purple',
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Солнцезащитные",
          price: "99.99",
          sex: "Мужские",
          color: 'black',
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
          color: 'red',
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Детские",
          price: "49.99",
          sex: "Женские",
          color: 'white',
        },
      ],
      items: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
          color: 'black',
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "Спортивные",
          price: "50",
          sex: "Мужские",
          color: 'white',
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "Детские",
          price: "149.99",
          sex: "Мужские",
          color: 'red',
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Солнцезащитные",
          price: "500",
          sex: "Мужские",
          color: 'blue',
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Спортивные",
          price: "580",
          sex: "Женские",
          color: 'green',
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Для чтения",
          price: "520",
          sex: "Мужские",
          color: 'purple',
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Солнцезащитные",
          price: "99.99",
          sex: "Мужские",
          color: 'black',
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
          color: 'red',
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Детские",
          price: "49.99",
          sex: "Женские",
          color: 'white',
        },
      ],
      itemsAll: [
        {
          id: 1,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
          color: 'black',
        },
        {
          id: 2,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "жіночі безправні окуляри восьмикутні з поляризованими лінзами чорний",
          category: "Спортивные",
          price: "50",
          sex: "Мужские",
          color: 'white',
        },
        {
          id: 3,
          title: "Select CS6-FL-GR",
          img: "3.jpg",
          desc: "Защитные очки Select CS6-FL-GR поляризационные Плавающие Зеленый/Хамелеон",
          category: "Детские",
          price: "149.99",
          sex: "Мужские",
          color: 'red',
        },
        {
          id: 4,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Солнцезащитные",
          price: "500",
          sex: "Мужские",
          color: 'blue',
        },
        {
          id: 5,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Спортивные",
          price: "580",
          sex: "Женские",
          color: 'green',
        },
        {
          id: 6,
          title: "Seta Decor",
          img: "2.jpeg",
          desc: "Очки Seta Decor Кот Базилио 15-289BLK Черные",
          category: "Для чтения",
          price: "520",
          sex: "Мужские",
          color: 'purple',
        },
        {
          id: 7,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Солнцезащитные",
          price: "99.99",
          sex: "Мужские",
          color: 'black',
        },
        {
          id: 8,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Для чтения",
          price: "49.99",
          sex: "Мужские",
          color: 'red',
        },
        {
          id: 9,
          title: "Walker’s Ikon Tanker",
          img: "1.webp",
          desc: "Черные очки баллистические Walker’s Ikon Tanker затемненное стекло",
          category: "Детские",
          price: "49.99",
          sex: "Женские",
          color: 'white',
        },
      ],
      curitems: [],
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
      search: ''
    }
    this.allCheck = this.allCheck.bind(this)
    this.search = this.search.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delitem = this.delitem.bind(this)
    this.setOpen = this.setOpen.bind(this)

  }
  render() {
    console.log(list)
    return (
      <div className='text-blue-400'>
        <Header setOpen={this.setOpen} delitem={this.delitem} open={this.state.open} curitems={this.state.curitems} search={this.search} curstate={this.state.curstate} curcat={this.state.curcat} addItem={this.addItem}/>
        <Nav allCheck={this.allCheck} curcol={this.state.curcol} colCheck={this.colCheck} setOpen={this.setOpen} open={this.state.open} itemsCat={this.state.itemsCat} allCheck={this.allCheck} items={this.state.items} categories={this.state.categories}/>
        <Main colors={this.state.colors} curitems={this.state.curitems} open={this.state.open} addItem={this.addItem} items = {this.state.items} search={this.state.search}/>
      </div>
    )
  }

  allCheck(cat, state, col) {
    let result = this.state.itemsAll
    this.setState({curcat: cat})
    this.setState({curstate: state})
    if (cat === 'allC'){
      result = this.state.itemsAll
    } else {
      result = this.state.itemsAll.filter(el => (
        el.category === cat
      ))
    }
    if (state !== 'allG'){
      result = result.filter(el => (
        el.sex === state
      ))
    } else {
      result = result
    }
    if (col !== 'allCol'){
      if (col === 'bg-white' || col === 'bg-black'){
        result = result.filter(el => (
          el.color === col.slice(3)
        ))
      } else {
        result = result.filter(el => (
          el.color === col.slice(3,-4)
        ))
      }
    }
    this.setState({items: result})
    this.setState({itemsCat: result})
  }

  search(text){
    if (text){
      console.log(text)
      this.setState({items: this.state.itemsCat.filter(el => (
        el.desc.toLowerCase().indexOf(text.toLowerCase()) !== -1 || el.price.indexOf(text) !== -1
      ))})
      console.log(this.state.items.filter(el => (
        el.desc.toLowerCase().indexOf(text) !== -1
      )))
    } else {
      this.setState({items: this.state.itemsCat})
    }
    this.setState({search: text})
  }

  addItem(item){
    console.log(item.selected)
    let isIn = false
    let arr = [...this.state.curitems, item]
    this.setState({curitems: [...this.state.curitems, item]})
    this.state.curitems.forEach(el => {
      if (el.id === item.id){
        isIn = true
      }
    })
    if (isIn) {
      this.setState({curitems: this.state.curitems.filter(el => (
        el.id !== item.id
      ))})
    }
  }

  delitem(item){
    item.selected = false
    this.state.curitems.forEach(el => {
      if (el.id === item.id){
        item.selected = false
      }
    })
    let arr = [...this.state.curitems.filter(el => (
      el.id !== item.id
    ))]
    this.setState({curitems: arr})
  }

  setOpen(){
    this.setState({open: !this.state.open})
  }
}
export default App