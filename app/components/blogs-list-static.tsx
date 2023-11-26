import Link from "next/link"
import type { Database } from "../../database.types"
type Blog = Database["public"]["Tables"]["blogs"]["Row"]

const fetchBlogs = async () => {
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
export async function BlogListStatic() {
  const blogs = await fetchBlogs()
  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">Blogs</p>
      <ul className="text-sm">
        {blogs?.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            <Link href={`/blogs/${blog.id}`} prefetch={false}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
