
import './App.css';
import GlobalLayout from './Layouts/globalLayout';
import HomePage from './Pages/Homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useState, useEffect} from "react"
import TodoForm from './Pages/TodoFormPage';
import ErrorPage from './Components/Error-Page';
const urlEndpoint = "http://localhost:4000";




function App() {

  const [todoList, setTodoList] = useState([])
  const [refetch, setRefetch] = useState(false)
  const [getAllParam, setGetAllParams] = useState("?limit=10&page=1&sortBy=creationDate&order=asc")

  const generateGetAllParams = ( limit, page, sortBy, order) => {
    const queryString = "?"+"limit="+limit+"&"+"page="+page+"&"+"sortBy="+sortBy+"&"+"order="+order
    setGetAllParams(queryString)
  }

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage todoList={todoList} setRefetch={setRefetch} urlEndpoint={urlEndpoint} generateGetAllParams={generateGetAllParams}/>
      },
        {
          path: "todo-form",
          element: <TodoForm urlEndpoint={urlEndpoint} setRefetch={setRefetch} />
        }]
    }
  ])

 

  useEffect(()=>{
    const fetchAllSample =  async () => {
      const resultAllSample = await fetch(`${urlEndpoint}/todos/allfromDB${getAllParam}`)
      
      const fetchedSampleTodos = await resultAllSample.json();
      console.log(fetchedSampleTodos.todos)
      setTodoList(fetchedSampleTodos.todos)
    }
    fetchAllSample();
  }, [refetch, getAllParam])
  
  return (
    <div className="App-header">
    <RouterProvider router={router} todoList={todoList} />
    
  </div>
  );
}

export default App;
