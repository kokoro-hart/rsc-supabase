import { PropsWithChildren } from "react"

export default function ThirdLayout({ children }: PropsWithChildren) {
  return (
    <div className="mt-6 text-center">
      <p>Layout 3</p>
      {children}
    </div>
  )
}
