import { PortableText } from '@portabletext/react'
import ImageWithBlur from 'components/ImageWithBlur'
import IconInstagram from 'components/InstagramIcon'
import Returnbar from 'components/Returnbar'
import { ScrollProvider } from 'components/ScrollProvider'
import SongModal from 'components/SongModal'
import IconSpotify from 'components/SpotifyIcon'
import IconYoutube from 'components/YoutubeIcon'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import {
  getAllSongs,
  getArtist,
  getArtists,
  getSongsFromArtist,
  urlFor,
} from 'sanity-utils'
import React from 'react'

type Props = {
  params: { slug: string }
  searchParams: Record<string, string> | null | undefined
}

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const artist = await getArtist(params.slug)
  return {
    title: artist.name,
  }
}

export async function generateStaticParams() {
  const artists = await getArtists()

  return artists.map((artist) => ({
    slug: artist.slug.current,
  }))
}

export default async function AritstPage({ params, searchParams }: Props) {
  const slug = params.slug
  const artist = await getArtist(slug)
  const artistId = artist._id
  const songs = await getSongsFromArtist(artistId)

  const showModal = searchParams?.modal === 'true'
  const songId = searchParams?.id

  return (
    <ScrollProvider>
      <div>
        <Returnbar />

        <div className="flex justify-center">
          <div className="mx-2 md:w-2/3 flex flex-col">
            <div className="">
              <ImageWithBlur
                src={urlFor(artist.image).width(1920).height(1080).url()}
                alt={artist.name}
                width={1920}
                height={1080}
                priority={true}
              />
              {/* <ImageWithBlur src={artist.imageUrl} alt={artist.name} width={1920} height={1080} /> */}
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <h1 className="font-bold text-5xl">{artist.name}</h1>
              </div>
              <div className="flex gap-3 px-2 items-center">
                <Link href={artist.spotify ? artist.spotify : '/'} className="">
                  <IconSpotify />
                </Link>
                <Link
                  href={artist.instagram ? artist.instagram : '/'}
                  className=""
                >
                  <IconInstagram />
                </Link>
                <Link href={artist.youtube ? artist.youtube : '/'} className="">
                  <IconYoutube />
                </Link>
              </div>
            </div>

            <div>
              <PortableText value={artist.about} />
            </div>
            <h3 className="mt-8 text-3xl">releases</h3>
            <div className="flex flex-row flex-wrap gap-3 justify-between py-10">
              {songs.map((song, idx) => (
                <div key={idx} className="object-fill">
                  <Link
                    scroll={false}
                    href={`/artists/${artist.slug.current}/?modal=true&id=${song.slug.current}`}
                  >
                    <ImageWithBlur
                      alt={song.title}
                      src={song.imageUrl}
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Suspense fallback={<p></p>}>
          {' '}
          <SongModal
            id={songId}
            href={`/artists/${artist.slug.current}`}
          />{' '}
        </Suspense>
      )}
    </ScrollProvider>
  )
}
