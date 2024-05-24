import { getArtist, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { ImageUrlBuilder } from 'next-sanity-image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import IconSpotify from 'components/SpotifyIcon';
import Link from 'next/link';

type Props = {
    params: { slug: string }
}

export default async function AritstPage({ params }: Props) {
    const slug = params.slug;
    const artist = await getArtist(slug);

    return (
        <div>
            <div>
                    <Image src={urlFor(artist.image).width(1920).height(1080).url()} alt={artist.name} width={1920} height={1080} className=''/>
               
            </div>
            <div className='flex justify-between'>
                <h1 className='text-bold text-5xl mt-3'>{artist.name}</h1>
                {/* <Link href={artist.spotify} className=" hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center"> */}
            <IconSpotify />
            {/* </Link> */}
            </div>
            
            <div><PortableText value={artist.about}/></div>
            
        </div>
    )
}

