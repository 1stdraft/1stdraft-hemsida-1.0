import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { getSongs, urlFor } from 'sanity-utils'

import ImageWithBlur from './ImageWithBlur'
import { RevealCover } from './Reveal'

export default async function LatestSongs2() {
  const songs = await getSongs()

  return (
    <div id="latest-releases" className="grid items-center gap-5">
      {songs.map((song, index) => (
        <div
          key={song._id}
          className={`${index % 2 ? 'justify-self-start' : 'justify-self-end'}`}
        >
          <RevealCover>
            <div className="shadow-lg hover:shadow-md transition">
              <Link
                scroll={false}
                href={`/?modal=true&id=${song.slug.current}`}
                shallow={true}
              >
                {/* <Link scroll={false} href="/?modal=true" > */}

                <ImageWithBlur
                  className="w-full"
                  src={urlFor(song.coverImage).width(300).height(300).url()}
                  alt={song.title}
                  height={300}
                  width={300}
                />
              </Link>
            </div>
          </RevealCover>
        </div>
      ))}
    </div>
  )
}
