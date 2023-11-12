import { PropsWithChildren } from "react"

export default function FirstLayout({ children }: PropsWithChildren) {
  return (
    <div className="mt-6 text-center">
      <p>Layout 1</p>
      {children}
    </div>
  )
}
