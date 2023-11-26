import Link from "next/link"
import { fetchBlogsStatic } from "../api"

export async function BlogListStatic() {
  const blogs = await fetchBlogsStatic()
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
