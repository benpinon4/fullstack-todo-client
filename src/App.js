
import './App.css';
import GlobalLayout from './Layouts/globalLayout';
import HomePage from './Pages/Homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useState, useEffect} from "react"
import TodoForm from './Pages/TodoFormPage';
const urlEndpoint = "http://localhost:4000";




function App() {

  const [todoList, setTodoList] = useState([])
  const [refetch, setRefetch] = useState(false)
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <GlobalLayout />,
      children: [
        {
          index: true,
          element: <HomePage todoList={todoList} setRefetch={setRefetch} urlEndpoint={urlEndpoint}/>
      },
        {
          path: "todo-form",
          element: <TodoForm urlEndpoint={urlEndpoint} setRefetch={setRefetch} />
        }]
    }
  ])

  useEffect(()=>{
    const fetchAllSample =  async () => {
      const resultAllSample = await fetch(`${urlEndpoint}/todos/allfromDB`)
      
      const fetchedSampleTodos = await resultAllSample.json();
      console.log(fetchedSampleTodos.todos)
      setTodoList(fetchedSampleTodos.todos)
    }
    fetchAllSample();
  }, [refetch])
  
  return (
    <div className="App-header">
    <RouterProvider router={router} todoList={todoList} />
    
  </div>
  );
}

export default App;
