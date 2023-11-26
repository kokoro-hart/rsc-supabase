import { Suspense } from "react"
import { RefreshButton } from "@/components/refresh-button"
import { Spinner } from "@/components/spinner"
import { TimerCounter } from "@/components/timer-counter"
import { NotesList } from "../features/notes"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 text-center">
      <Suspense fallback={<Spinner color="border-green-500" />}>
        {/* @ts-ignore */}
        <NotesList />
      </Suspense>
      <TimerCounter />
      <RefreshButton />
    </main>
  )
}
