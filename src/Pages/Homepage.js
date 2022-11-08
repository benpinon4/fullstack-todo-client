import TodoCard from "../Components/Todocard"




const HomePage = (props) => {
    const {todoList, urlEndpoint, setRefetch} = props
    
    console.log(todoList)
    return (
        <div>
            <h1>Fullstack To Do Application</h1>
           {todoList.map((todo, index)=>{
            return(
                <TodoCard key={index} todo={todo} urlEndpoint={urlEndpoint} setRefetch={setRefetch}/>
               )
           })}
        </div>
    )
}

export default HomePage