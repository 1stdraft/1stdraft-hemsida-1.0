import Link from 'next/link'
import { getArtists } from 'sanity-utils'

import { RevealArtists } from './Reveal'
import { Suspense } from 'react'

export default async function ArtistsSection() {
  const artists = await getArtists()

  return (
    <div
      id="artists"
      className="relative py-10 w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {artists.map((artist, index) => (
        <RevealArtists key={artist._id} idx={index}>
          <Suspense>
          <Link
            href={`/artists/${artist.slug.current}`}
            className="relative flex gap-10 whitespace-nowrap text-6xl sm:text-7xl overflow-hidden"
            shallow={true}
          >
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
            <p className="">{artist.name}</p>
          </Link>
          </Suspense>
        </RevealArtists>
      ))}
    </div>
  )
}
