import HomePageOptionBar from "../Components/HomePageOptionBar"
import TodoCard from "../Components/Todocard"




const HomePage = (props) => {
    const {todoList, urlEndpoint, setRefetch, generateGetAllParams} = props
    
    console.log(todoList)
    return (
        <div className="homePage">
            <div>
            <h1>Fullstack To Do Application</h1>
            </div>
            <div>
            <HomePageOptionBar generateGetAllParams={generateGetAllParams}/>
            </div>
            <div>
           {todoList.map((todo, index)=>{
            return(
                <TodoCard key={index} todo={todo} urlEndpoint={urlEndpoint} setRefetch={setRefetch} />
               )
           })}
           </div>
        </div>
    )
}

export default HomePage