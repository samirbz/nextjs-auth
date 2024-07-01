import Link from "next/link"
import React from "react"

const LogoNav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <div className="shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Logo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LogoNav
