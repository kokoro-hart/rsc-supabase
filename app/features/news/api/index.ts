import { News } from "../types"

export async function fetchNews() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: "no-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data in server")
  }
  const news: News[] = await res.json()
  return news
}
