import ProcessTodo from "./Todos/TodoProcess";
import GetTodo from "./Todos/GetTodo";
import { useState } from "react";
const App = () => {
    const [dynamicTodo,setDynamicTodo] = useState([])
    const callTodo = (todo) => {
        setDynamicTodo([...dynamicTodo,todo]);
        
    }
    return (
        <div>
            <GetTodo callTodo = {callTodo}/>
            <ProcessTodo todos = {dynamicTodo} />
        </div>
    )
}

export default App;