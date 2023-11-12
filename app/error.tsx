"use client"

import { Spinner } from "./components/spinner"

export default function Error() {
  return (
    <div className="mt-6 text-center text-red-600">
      <p>Data fetching is server failed.</p>
    </div>
  )
}
