"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [username, setUsername] = useState(null)

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me")
        setUsername(res.data.data.username)
      } catch (error) {
        console.error("Error fetching user details:", error)
      }
    }
    getUserDetails()
  }, [])

  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      // router.push("/sign-in")
      location.assign("/sign-in")
    } catch (error: any) {
      console.log(error.message)
    }
  }

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
            {username ? (
              <div className="flex flex-col">
                <p className="text-white">
                  Hi,{" "}
                  <span className="font-bold text-yellow-600">{username}</span>
                </p>
                <Link className="text-white" href="/profile">
                  Profile
                </Link>
                <button className="text-white" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <div>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
