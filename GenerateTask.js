import React from "react"

function GenerateTask(props){

  return(
    <div className="orderBlock orderTask">
      <input
          type="text"
          name="newTask"
          value={props.newTask}
          onChange={() => props.handleChange(event)}
          onKeyPress={() => props.handleKey(event)}
          className="inputStyle"
      />
      <button
        onClick={() => props.addTask(event)}
        className ="addButton"
      >Add</button>
    </div>
  )
}

export default GenerateTask
