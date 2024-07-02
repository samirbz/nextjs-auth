"use client"
import axios from "axios"
import Link from "next/link"
import React, { useState } from "react"
import toast from "react-hot-toast"

const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const onResetPassword = async () => {
    try {
      const response = await axios.post("/api/users/sign-in", user)
      console.log("Login success", response.data)
      toast.success("Login success")
      // router.push("/")
      location.assign("/")
    } catch (error: any) {
      console.log("Login failed", error.message)
      toast.error(error.message)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <label htmlFor="email">email</label>
      <input
        className="mb-4 rounded-lg border border-gray-300 p-2 text-black focus:border-gray-600 focus:outline-none"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <button
        onClick={onResetPassword}
        className="mb-4 rounded-lg border border-gray-300 p-2 focus:border-gray-600 focus:outline-none"
      >
        Reset password
      </button>
    </div>
  )
}

export default ForgotPassword
