"use client"
import { useAppContext } from "@/context/index"
import Link from "next/link"

const Navbar = () => {
  const { name } = useAppContext()
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Logo
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/sign-in"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Sign Up
            </Link>
            <p>{name}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
