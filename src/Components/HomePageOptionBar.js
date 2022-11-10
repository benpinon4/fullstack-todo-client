import {useEffect, useState} from "react"


const HomePageOptionBar = (props) => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("creationDate")
    const [order, setOrder] = useState("asc")

    const {generateGetAllParams} = props

   useEffect(()=>{
    generateGetAllParams(limit, page, sortBy, order)
   }, [limit, page, sortBy, order]) 

    
    return(
        <div>
            <label>Page: </label>
            <input type="number" value={page} onChange={(e)=>{
                setPage(e.target.value)
                // generateGetAllParams(limit, page, sortBy, order)
            }}></input>
            <label> Limit: </label>
            <input type="number" value={limit} onChange={(e)=>{
                setLimit(e.target.value)
                // generateGetAllParams(limit, page, sortBy, order)
            }}></input>
            <label> Order: </label>
            <select value={order} onChange={(e)=>{
                setOrder(e.target.value)
                // generateGetAllParams(limit, page, sortBy, order)
            }}>
                <option></option>
                <option value="asc">ascending</option>
                <option value="desc">descending</option>
            </select>
            <label> Sort By: </label>
            <select value={sortBy} onChange={(e)=>{
                setSortBy(e.target.value)
                // generateGetAllParams(limit, page, sortBy, order)
            }}>
                <option value="title">title</option>
                <option value="description">description</option>
                <option value="priority">priority</option>
                <option value="isComplete">completed</option>
                <option value="creationDate">created date</option>
                <option value="lastModified">last modified</option>
                <option value="completedDate">completed date</option>
            </select>

        </div>
    )
}

export default HomePageOptionBar