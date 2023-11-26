import { Spinner } from "@/app/components/spinner"
import { TodoList, EditTask } from "@/app/features/todo"
import { Suspense } from "react"

export default async function TodoLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200`}>
        <EditTask />
        <Suspense fallback={<Spinner />}>
          {/* @ts-ignore*/}
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
