"use client"

import { useRouter } from "next/navigation"

const About = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col text-left">
      About
      <button onClick={() => router.push("/contact")}>
        Go to Contact page
      </button>
    </div>
  )
}
export default About
