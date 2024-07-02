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
      console.log("reset password")
    } catch (error: any) {
      console.log("Reset password failed", error.message)
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
