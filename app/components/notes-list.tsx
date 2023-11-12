import React from "react"
import type { Database } from "@/database.types"
import { format } from "date-fns"

type Note = Database["public"]["Tables"]["notes"]["Row"]

async function fetchNotes(): Promise<Note[]> {
  const res = await fetch(`${process.env.url}/rest/v1/notes?=select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to fetch notes")
  }

  const data = await res.json()

  return data
}

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
