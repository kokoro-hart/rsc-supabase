import { TodoItem } from "./todo-item"
import { getTodos } from "../api"

export async function TodoList() {
  const { data: todos } = await getTodos()
  return (
    <ul className="my-6 mx-3">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}
