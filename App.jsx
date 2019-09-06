import React from "react"
import Header from "./Header"
import Task from "./Task"
import GenerateTask from "./GenerateTask"
import "./style.css"

class App extends React.Component{
  constructor(){
    super()
    this.state=({
      newTask:"",
      pushedTask: "",
      allTasks: [],
    })
    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
    this.handleKey = this.handleKey.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.handleKey = this.handleKey.bind(this)
  }

  handleChange(event){
    const {name, type, checked, value} = event.target
    this.setState({[name] : value})
  }

  handleCheck(index){
    this.setState(prevState => {
      const updatedList = prevState.allTasks.map((allTasks, num) => {
        if (num == index){
            allTasks.done = !allTasks.done
        }
        return allTasks
      })
      return {
        allTasks: updatedList
      }
    })
  }

  addTask(event){

    if (this.state.newTask.length !=0){
      let newOne = {};
      newOne.task = this.state.newTask
      newOne.done = false

      this.setState(prevState => {
        const addedList = prevState.allTasks.concat(newOne)
        return{
          allTasks: addedList,
          newTask:"",
        }
      })
    }
  }

  removeTask(index){
    this.setState(prevState => {
      const deletedList = prevState.allTasks.filter((item, itemIndex)=> index!= itemIndex)
      return {
        allTasks: deletedList,
      }
    })

  }
  handleKey(event){
    if(event.key === 'Enter'){
      this.addTask(event);
    }
  }

  render() {
      const list = this.state.allTasks.map((item, index) =>{
        return(
          <Task item={item} key={index+100} index={index} handleCheck={this.handleCheck} removeTask={this.removeTask} />
        )
    })
    return(
      <div className="mainBlock">
        <Header />
        <GenerateTask handleChange={this.handleChange} handleKey={this.handleKey} addTask={this.addTask} newTask={this.state.newTask}/>
        {list}
      </div>
    )
  }
}

export default App
