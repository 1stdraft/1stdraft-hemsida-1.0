import Link from 'next/link';
import { getArtists, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist';

import Image from 'next/image';
import { width } from 'components/OpenGraphImage';

export default async function Aritsts() {
    const artists = await getArtists();
    if(!artists) {
        return null;
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {artists.map((artist) => (
            <div key={artist._id} className=''>
            <Link href={`/artists/${artist.slug.current}`} >
                <Image src={urlFor(artist.image).width(512).height(512).url()} width={512} height={512} alt={artist.name} className='object-cover'/>
                <h3 className='text-1xl'>
                {artist.name}
                </h3> 
            </Link>
            </div>
        ))}
        </div>
    )
}

