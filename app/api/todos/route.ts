import { NextResponse } from "next/server"

export const GET = async () => {
  const response = await fetch("https://dummyjson.com/todos")
  const { todos } = await response.json()
  return NextResponse.json({ todos }, { status: 200 })
}
