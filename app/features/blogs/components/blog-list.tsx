import { fetchBlogs } from "../api"

export async function BlogList() {
  const blogs = await fetchBlogs()
  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">Blogs</p>
      <ul className="text-sm">
        {blogs?.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            {blog.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
