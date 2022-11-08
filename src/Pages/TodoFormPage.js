import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoForm = (props) => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  
  const { urlEndpoint,setRefetch } = props;
  
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");  
      };

      const handleAddNewTodo = async () => {
        setRefetch(true)

        const resultAddBlog = await fetch(`${urlEndpoint}/todos/add-todo`,{
          method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                priority,
            })
        });
       
        setRefetch(false) 
      };
  return (
    <div>
      <h1>Create Todo Form</h1>
      <label>Todo Title:</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <br></br>
      <label>Todo Description:</label>
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <br></br>
      <label>Todo Priority:</label>
      <select
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option></option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <br></br>
      <button
        onClick={() => {
          navigateToHome();
          handleAddNewTodo();
        }}
      >
        Create New Todo
      </button>
    </div>
  );
};

export default TodoForm;
