import { Note } from "../types"

export async function fetchNotes(): Promise<Note[]> {
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
