import { Blog } from "../types"

export const fetchBlogs = async () => {
  await new Promise((resolve) => setTimeout(resolve, 6000))
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: "no-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const blogs: Blog[] = await res.json()
  return blogs
}

export const fetchBlogsStatic = async () => {
  const res = await fetch(`${process.env.url}/rest/v1/blogs?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string,
    }),
    cache: "force-cache",
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const blogs: Blog[] = await res.json()
  return blogs
}
