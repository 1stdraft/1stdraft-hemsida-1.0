import { Reveal } from 'components/Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { getArtists, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist'

export default async function Aritsts() {
  const artists = await getArtists()
  if (!artists) {
    return null
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:w-1/2 gap-8 mx-2">
      {artists.map((artist) => (
        <Reveal key={artist._id}>
          <Link
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-md w-full h-56 p-6"
            href={`/artists/${artist.slug.current}`}
          >
            <Image
              src={urlFor(artist.image).width(1080).height(1080).url()}
              alt={artist.name}
              width={512}
              height={512}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-2xl text-white">{artist.name}</h3>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}
