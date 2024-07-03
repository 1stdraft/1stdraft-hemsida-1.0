import { PortableText } from '@portabletext/react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { width } from 'components/OpenGraphImage';
import IconSpotify from 'components/SpotifyIcon';
import IconYoutube from 'components/YoutubeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { ImageUrlBuilder } from 'next-sanity-image';
import { Reference } from 'sanity';
import { getArtist, getSong, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist';

type Props = {
    params: { slug: string }
}

export default async function SongPage({ params }: Props) {
    const slug = params.slug;
    const song = await getSong(slug);

    return (
        <div className='lg:w-1/2 flex'>
            
            <div className='basis-1/2'>
                <h1 className='text-bold text-5xl pb-5'>{song.title}</h1>
                <Link className="flex justify-start items-center" href={`/artists/${song.artist.slug.current}`}>
                <Image alt={song.artist.name} className='rounded-full' src={urlFor(song.artist.image).width(96).height(96).url()} width={48} height={48} />
                <h2 className='p-3'>{song.artist.name}</h2>
                </Link>
                <div>
                    
                    <h1 className='text-bold'>Credits</h1>
                    
                    <PortableText value={song.credits}/>
                </div>
                <div className='p-5'>
                {/* <Link href={song.spotify} className="items-center">
                <IconSpotify />
                </Link> */}
                </div>
            </div>
            
            

            <div className='basis-1/2'>
                    <Image src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} width={512} height={512} className=''/>
            </div>
            
        </div>
    )
}

