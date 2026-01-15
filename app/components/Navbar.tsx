import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-slate-600/70 border-b border-white/50 p-4 flex shrink-0 justify-between felx-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1 className="text-3xl font-bold text-white hover:text-emerald-200 grid place-content-center mb-2 md:mb-0">
        <Link href="/">Wikilive 👀</Link>
      </h1>
    </nav>
  )
}
