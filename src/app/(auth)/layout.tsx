import LogoNav from "@/components/shared/navbar/LogoNav"
import React from "react"
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LogoNav />
      {children}
    </div>
  )
}
export default Layout
