"use client"
import axios from "axios"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const router = useRouter()
  const [data, setData] = useState("nothing")
  const logout = async () => {
    try {
      await axios.get("/api/users/logout")
      // router.push("/sign-in")
      location.assign("/sign-in")
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me")
    setData(res.data.data.username)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2 className="rounded bg-green-500 p-1">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="mt-4 rounded bg-green-800 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        GetUser Details
      </button>
    </div>
  )
}
