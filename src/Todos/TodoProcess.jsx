import ShowTodo from "./TodoShow";

const ProcessTodo = ({todos}) => {
    
    return(
        <div>
            {todos.map((todo,i) => <ShowTodo todo = {todo} i = {i}/>)}
        </div>
    )
}
export default ProcessTodo;