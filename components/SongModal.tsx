import Link from 'next/link'
import { PortableText } from 'next-sanity'
import { getSong, urlFor } from 'sanity-utils'

import IconClose from './IconClose'
import ImageWithBlur from './ImageWithBlur'
import { RevealModal } from './Reveal'
import IconSpotify from './SpotifyIcon'
import { TransitionLink } from './TransitionLink'
import IconYoutube from './YoutubeIcon'
import IconApplemusic from './IconAppleMusic'

{
  /* <Image alt={song.artist.name} className='rounded-full' src={urlFor(song.artist.image).width(96).height(96).url()} width={48} height={48} />

<Image src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} width={512} height={512} classNameName=''/> */
}

export default async function SongModal({ id, href }: any) {
  const song = await getSong(id)

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-10 overflow-visible">
        <RevealModal>
          <div>
            <Link
              className="fixed h-[110vh] inset-0 bg-black opacity-75 cursor-default"
              href={href}
              scroll={false}
            />

            <Link
              className="fixed z-10 top-2 left-2"
              href={href}
              scroll={false}
            >
              <IconClose />{' '}
            </Link>
          </div>
        </RevealModal>

        {/* <div className="relative isolate flex flex-col overflow-hidden rounded-md w-96 min-h-96 px-8 pb-8 pt-8 mx-auto">
			<Image src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} width={512} height={512} className='absolute inset-0 w-full object-cover' />
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
			<h3 className="z-10 mt-3 text-3xl font-bold text-white">{song.title}</h3>
			<div className="z-10 gap-y-1 overflow-hidden text-md leading-6 text-white">{song.artist.name}</div> */}
        {/* <Image alt={song.artist.name} className='rounded-full' src={urlFor(song.artist.image).width(96).height(96).url()} width={48} height={48} /> */}
        {/* <div className="z-10 justify-end gap-y-1 overflow-hidden text-sm leading-2 text-gray-300"><PortableText value={song.credits}/></div>
			</div> */}
        <RevealModal delay={0.5}>
          <div className="flex flex-col mx-3 w-[40vh]">
            <ImageWithBlur
              src={urlFor(song.coverImage).width(512).height(512).url()}
              alt={song.title}
              width={512}
              height={512}
              className="z-10 size-[40vh]"
            />
            <div className="flex flex-row mt-2 justify-between items-center text-balance">
              <h3 className="text-3xl font-bold text-white">{song.title}</h3>
              <div className="flex flex-row gap-2 pl-4 items-center">
                {song.spotify ? (
                  <Link href={song.spotify}>
                    <IconSpotify fill="white" />
                  </Link>
                ) : null}
                {song.youtube ? (
                  <Link href={song.youtube}>
                    <IconYoutube fill="white" />
                  </Link>
                ) : null}
                {song.appleMusic ? (
                  <Link href={song.appleMusic}>
                    <IconApplemusic fill="white" />
                  </Link>
                ) : null}
              </div>
            </div>

            <TransitionLink
              href={`/artists/${song.artistSlug}`}
              className="z-10 overflow-hidden text-md text-white"
            >
              {song.name}
            </TransitionLink>

            <div className="mt-5">
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-2 text-gray-300">
                <PortableText value={song.credits} />
              </div>
            </div>
          </div>
        </RevealModal>
      </div>
    </>
  )
}
