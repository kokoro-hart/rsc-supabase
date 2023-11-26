import Counter from "../../../components/counter"
import { fetchNews } from "../api"

export async function NewsList() {
  const news = await fetchNews()
  return (
    <div className="m-1 border border-blue-500 p-4">
      <Counter />
      <p className="my-4 pb-3 text-xl font-medium underline underline-offset-4">News</p>
      <ul className="m-3">
        {news.map((news) => (
          <li key={news.id}>
            <p> {news.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
