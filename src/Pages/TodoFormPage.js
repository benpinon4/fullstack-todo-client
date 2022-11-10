import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoForm = (props) => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [payLoad, setPayload] = useState("")
  const { urlEndpoint, setRefetch } = props;
  
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");  
      };

      const handleAddNewTodo = async () => {
        setRefetch(true)

        const addBlogResponse = await fetch(`${urlEndpoint}/todos/add-todo`,{
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

        const payloadresponse = await addBlogResponse.json()
        setPayload(payloadresponse)
       
        setRefetch(false)
        if(payloadresponse.success === true){
        navigateToHome();
        }
        
      };
      console.log(priority)
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
          console.log(e.target.value)
          
        }}
      >
        <option></option>
        <option >Low</option>
        <option >Medium</option>
        <option >High</option>
      </select>
      <br></br>
      <button
        onClick={() => {
          handleAddNewTodo();
        }}
      >
        Create New Todo
      </button>
      <br/>
      {payLoad.message}
    </div>
  );
};

export default TodoForm;
