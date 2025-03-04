"use client"; // Enables client-side rendering in Next.js
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/Arceus")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch Pokémon data");
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Runs only once when the component mounts

  // Client-side fetching is used because:
  // - The data is dynamic and may change frequently.
  // - No need for SEO optimization or pre-fetching on the server.
  // - Allows faster initial page load and user-triggered refresh.

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Pokémon Info</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <Image
          src={data.sprites.front_default}
          alt="Image Of Me"
          width={150}
          height={150}
          className="m-auto rounded-xl border-2 border-black"
        />
        <h2 className="text-xl font-semibold text-center capitalize">{data.name}</h2>
        <p className="text-gray-700 text-center">Base Experience: {data.base_experience}</p>
        <h3 className="mt-4 text-lg font-semibold">Type:</h3>
        <ul className="list-disc pl-5">
          {data.types.map((type, index) => (
            <li key={index} className="capitalize text-gray-600">
              {type.type.name}
            </li>
          ))}
        </ul>
        <h3 className="mt-4 text-lg font-semibold">Abilities:</h3>
        <ul className="list-disc pl-5">
          {data.abilities.map((ability, index) => (
            <li key={index} className="capitalize text-gray-600">
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
