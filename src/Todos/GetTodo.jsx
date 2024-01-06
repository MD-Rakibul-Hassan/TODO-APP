import { useState } from "react"

const GetTodo = ({callTodo}) => {
    const [addTodo,setAddTodo] = useState();
    const handleChangeTodo = (e) => {
        setAddTodo(e.target.value)
    }
    const handleAddTodo = (e) => {
        e.preventDefault();
        callTodo(addTodo);
        setAddTodo("")
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <fieldset>
                    <legend>Todo App</legend>
                    <label>
                        Add New Todo : 
                        <input 
                        type="text" 
                        onChange={handleChangeTodo}
                        value={addTodo}
                        placeholder="Add itmes"
                        />
                    </label>
                    <button>Add Todo</button>
                </fieldset>
            </form>
        </div>
    )
}
export default GetTodo;