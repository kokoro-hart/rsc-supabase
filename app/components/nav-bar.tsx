import Link from "next/link"

export function NavBar() {
  const nav = [
    { name: "Home", href: "/" },
    { name: "Nested Layout with Blogs", href: "/blogs" },
    { name: "Steaming SR", href: "/steaming-sr" },
    { name: "Auth with CRUD", href: "/auth" },
  ]
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        {nav.map(({ name, href }) => (
          <Link key={name} href={href} className="rounded bg-gray-700 py-2 px-3 text-white hover:bg-gray">
            {name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
