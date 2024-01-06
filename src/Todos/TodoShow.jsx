const ShowTodo = ({todo,i}) => {
    return(
        <div>
            <p key={i}>{todo}</p>
        </div>
    )
}
export default ShowTodo;