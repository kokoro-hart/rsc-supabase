import { PropsWithChildren } from "react"

export default function SecondLayout({ children }: PropsWithChildren) {
  return (
    <div className="mt-6 text-center">
      <p>Layout 2</p>
      {children}
    </div>
  )
}
