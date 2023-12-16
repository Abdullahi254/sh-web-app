'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error)
  }, [error])
 
  return (
    <main className="flex flex-col space-y-8 min-h-screen items-center py-20 px-6 max-w-4xl mx-auto">
      <h2>Something went wrong!</h2>
      <button
        className='hover:underline'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  )
}