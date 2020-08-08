import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
//Properties
//props bisa di function
function Greeting(props){
  return <h1> Halo {props.name} - umurnya {props.age} </h1>
}

//STATE 
//state cuma bisa di class bukan di function karena dinamis
class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time : props.start
    }
  }

  
  componentDidMount(){ //dijalankan setelah selesai load
    this.addInterval = setInterval( ()=>this.increase() ,1000)
  }

  componentWillMount(){ //dihapus setelah selesai digunakan
    clearInterval(this.addInterval)
  }

  increase(){
    this.setState((state,props)=>({
      time : parseInt(state.time) + 1
    }))
  }

  render(){
    return (
    <div>{this.state.time} Detik</div>
    );
  }
}

//function handleClick
// function Clicker(){
//   function handleClick(e){
//     alert("Berhasil Klik")
//     e.preventDefault();
//   }
//   return(
//     <a href="#" onClick={handleClick}> Klik </a>
//   )
// }

//class handleClick
class Toggle extends Component{
  constructor(props){
    super(props)
    this.state={
      toggleStatus: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state =>({
      toggleStatus: !state.toggleStatus
    }))
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
      </button>
    )
  }
}

class App extends Component{

  constructor(props){
    super(props)
      this.state={
        todoItem :'',
        items :[]
      }
  }

  handleSubmit = (event) =>{
    event.preventDefault()//wajib
    this.setState({
      items:[...this.state.items,this.state.todoItem], //menambah isi items selanjutnya
      todoItem:''
    })
  }

  handleChange = (event) =>{
    event.preventDefault()
    this.setState({
      todoItem:event.target.value
    })
  }

  render (){
    return (
      <div>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Greeting name="Vincent" age="21"/> */}
          {/* <Clicker />  */}
          {/* <Toggle />
          <Timer start="0"/> */}
        </header>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>
    )
  }
}



export default App;
