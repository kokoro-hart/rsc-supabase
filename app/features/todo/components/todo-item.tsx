"use client"

import Link from "next/link"
import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid"
import { useMutateTodos } from "../hooks"
import { Todo } from "../types"

export function TodoItem(todo: Todo) {
  const { updateTask, updateMutate, deleteMutate } = useMutateTodos()

  return (
    <li className="my-2">
      <input
        className="mr-1"
        type="checkbox"
        checked={todo.completed}
        onChange={() => updateMutate(todo.id, !todo.completed)}
      />
      <Link href={`auth/todo-crud/${todo.id}`}>{todo.title}</Link>
      <div className="float-right ml-20 flex">
        <PencilIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            updateTask({
              id: todo.id,
              title: todo.title,
            })
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            deleteMutate(todo.id)
          }}
        />
      </div>
    </li>
  )
}
