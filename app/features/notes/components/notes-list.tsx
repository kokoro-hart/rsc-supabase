import React from "react"
import { format } from "date-fns"
import { fetchNotes } from "../api"

export async function NotesList() {
  const notes = await fetchNotes()
  return (
    <div>
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">Notes</p>
      <ul className="m-3">
        {notes.map(({ id, title, created_at }) => (
          <li key={id}>
            <p>{title}</p>
            <p>
              <strong className="mr-3">{created_at && format(new Date(created_at), "yyyy-MM-dd HH:mm:ss")}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
