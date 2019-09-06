import React from "react"

function Task (props){

  return(
    <div className="orderBlock">
      <input
        type="checkbox"
        name="allTasks.done"
        checked = {props.item.done}
        onChange={() => props.handleCheck(props.index)}
      />
      <p className={"textTask" + (props.item.done ? " doneStyle" : "")}>{props.item.task}</p>
      <button
        className="buttonDelete"
        onClick={() => props.removeTask(props.index)}
      >Remove</button>
      <br />
    </div>
  )
}


export default Task
