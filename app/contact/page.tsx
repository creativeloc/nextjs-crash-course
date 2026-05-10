"use client"

import { useRouter } from "next/navigation"

const Contact = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4">
      Contact
      <button className="text-left" onClick={() => router.push("/about")}>
        Go To About Page
      </button>
    </div>
  )
}
export default Contact
