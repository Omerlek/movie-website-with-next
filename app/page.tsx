
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    router.push("/vod")
  }, [router])
  
  return (
    <main className="container">
      <h1>Vod project</h1>
    </main>
  )
}