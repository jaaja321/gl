import './main.css';
import './style.css';
import { list,col,Ru,Ua } from './list.js';
import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import translate from "translate"

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      langP: 'ru',
      ru: Ru,
      ua: Ua,
      lang: Ru,
      allcat: [
      'Эксклюзивные очки',
      'Спортивные очки',
      'Мужские поляризованные очки',
      'Женские поляризованные очки',
      'Детские солнцезащитные очки',
      'Чехлы и футляры для очков',
      'Женские солнцезащитные очки',
      'Солнцезащитные очки',
      'Очки для водителей ',
      'Мужские солнцезащитные очки',
      'Детские поляризованные очки',
      'Компьютерные очки',
      'Шнурки и цепочки для очков',
      'Имиджевые очки',
      'Детские и подростковые компьютерные защитные очки',
      'Футляры для диоптрических очков',
      'Очки для зрения',
],
      open: false,
      fil: [],
      curcat: 'allC',
      curstate: 'allG',
      curcol: '',
      sex: '',
      itemsCat: list,
      items: list,
      itemsAll: list,
      curitems: [],
      colors: col,
      search: '',
      y: false
    }
    this.allCheck = this.allCheck.bind(this)
    this.search = this.search.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delitem = this.delitem.bind(this)
    this.setOpen = this.setOpen.bind(this)
    this.setCat = this.setCat.bind(this)
    this.setLang = this.setLang.bind(this)
  }
  render() {
    return (
      <div className='text-red-400'>
        <Header setLang={this.setLang} lang={this.state.lang} langP={this.state.langP} setOpen={this.setOpen} delitem={this.delitem} open={this.state.open} curitems={this.state.curitems} search={this.search} curstate={this.state.curstate} curcat={this.state.curcat} addItem={this.addItem}/>
        <Nav fil={this.state.fil} allcat={this.state.allcat} colors={this.state.colors} allCheck={this.allCheck} curcol={this.state.curcol} colCheck={this.colCheck} setOpen={this.setOpen} open={this.state.open} itemsCat={this.state.itemsCat} items={this.state.items} categories={this.state.categories} ru={this.state.ru}/>
        <Main langP={this.state.langP} fil={this.state.fil} allCheck={this.allCheck} y={this.state.y} setCat={this.setCat} allcat={this.state.allcat} colors={this.state.colors} curcol={this.state.curcol} curitems={this.state.curitems} curcat={this.state.curcat} open={this.state.open} addItem={this.addItem} items = {this.state.items} lang={this.state.lang} search={this.state.search}/>
      </div>
    )
  }

  setCat(cat){
    this.setState({curcat: cat})
    console.log(cat)
    this.allCheck(cat, this.state.curstate, this.state.curcol)
  }

  allCheck(arr) {
    this.setState({fil: arr})
    this.setState({y: true})
    let colors = []
    let result = this.state.itemsAll
    this.setState({curcat: arr[0]})

    if (arr[0]){
      result = result.filter(el => (
        el.cat === arr[0]
      ))
      console.log(result)
    }

    result.forEach(el => {
      if (!colors.includes(el.col) && el.col){
        colors.push(el.col)
      }
    })
    this.setState({colors: colors})
    console.log(colors)
    if (arr[2]){
      result = result.filter(el => (
        el.col === arr[2]
      ))
      
    }
    console.log(this.state.fil)
    this.setState({items: result})
    this.setState({itemsCat: result})
    window.scrollTo(0,0)
  }

  setLang(p){
    this.setState({langP: p})
    console.log(p)
    if (p == 'ru'){
      this.setState({lang: this.state.ru})
    } else {
      this.setState({lang: this.state.ua})
    }
  }

  search(text){
    if (text){
      console.log(text)
      this.setState({items: this.state.itemsCat.filter(el => (
        el.title.toLowerCase().indexOf(text.toLowerCase()) !== -1 || el.id.indexOf(text) !== -1
      ))})
      console.log(this.state.items.filter(el => (
        el.title.toLowerCase().indexOf(text) !== -1
      )))
    } else {
      this.setState({items: this.state.itemsCat})
    }
    this.setState({search: text})
  }

  addItem(item){
    let isIn = false
    let arr = [...this.state.curitems, item]
    this.setState({curitems: [...this.state.curitems, item]})
    this.state.curitems.forEach(el => {
      if (el === item){
        isIn = true
      }
    })
    if (isIn) {
      this.setState({curitems: this.state.curitems.filter(el => (
        el !== item
      ))})
    }
  }

  delitem(item){
    item.selected = false
    this.state.curitems.forEach(el => {
      if (el === item){
        item.selected = false
      }
    })
    let arr = [...this.state.curitems.filter(el => (
      el !== item
    ))]
    this.setState({curitems: arr})
  }

  setOpen(){
    this.setState({open: !this.state.open})
  }
}
export default App