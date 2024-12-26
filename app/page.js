// In app/page.js
'use client'
import { PrizeWheel } from '../components/PrizeWheel'

export default function Home() {
  return (
    <main className="min-h-screen p-4 flex items-center justify-center bg-gray-50">
      <PrizeWheel />
    </main>
  )
}

// Create a new file: components/PrizeWheel.js
// Copy the entire PrizeWheel component code I provided earlier into this file