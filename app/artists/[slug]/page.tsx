import { getArtist, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { ImageUrlBuilder } from 'next-sanity-image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

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
            <h1 className='text-bold text-5xl mt-3'>{artist.name}</h1>
            <div><PortableText value={artist.about}/></div>
            
        </div>
    )
}

