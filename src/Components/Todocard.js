import { useState } from "react";

const TodoCard = (props) => {
  // const [id, setId] = useState("81960366-9f78-48ec-8e93-4875a5bfa4eb")
  const { todo, urlEndpoint, setRefetch } = props;
  const id = todo.id;

  const handleSetToComplete = async () => {
    setRefetch(true);
    // setId(todo.id)
    let toggleSwitch = null;
    if (todo.isComplete === true) {
      toggleSwitch = true;
    }
    if (todo.isComplete === false) {
      toggleSwitch = false;
    }
    const completeTodo = await fetch(
      `${urlEndpoint}/todos/complete-todo/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isComplete: toggleSwitch,
        }),
      }
    );
    setRefetch(false);
  };

  const handleDeleteTodo = async() => {
    setRefetch(true);
    const deleteTodo = await fetch(`${urlEndpoint}/todos/delete-todo/${id}`, {
        method: "DELETE"
    })
    console.log(deleteTodo)
    setRefetch(false);
}

  return (
    <div className="todoCard-container">
      <h2>{todo.title}</h2>
      <br></br>
      <label>ID:</label>
      <p>{todo.id}</p>
      <br></br>
      <label>Description:</label>
      <p>{todo.description}</p>
      <br></br>
      <label>Priority:</label>
      <p>{todo.priority}</p>
      <br></br>
      <label>Creation Date:</label>
      <p>{todo.creationDate}</p>
      <br></br>
      <label>Last Modified:</label>
      <p>{todo.lastModified}</p>
      <br></br>
      <label>Completed Date:</label>
      <p>{todo.completedDate}</p>
      <br></br>
      <button
        onClick={() => {
          handleSetToComplete();
        }}
      >
        Complete Todo
      </button>
      <button onClick={() => {
        handleDeleteTodo()
      }}>Delete Todo</button>
    </div>
  );
};
export default TodoCard;
