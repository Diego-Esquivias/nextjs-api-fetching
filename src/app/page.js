"use client"

import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}