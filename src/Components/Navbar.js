import { Link,Navigate } from "react-router-dom"


const NavBar = () => {



    return (
        <div className="navbar">
            <Link to="./">Home</Link>
            <Link to="./todo-form">Todo Form</Link>
        </div>
    )
}

export default NavBar