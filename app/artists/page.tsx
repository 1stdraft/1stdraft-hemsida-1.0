import Link from 'next/link';
import { getArtists, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist';

import Image from 'next/image';

export default async function Aritsts() {
    const artists = await getArtists();
    if(!artists) {
        return null;
    }
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:w-1/2 gap-8 mx-2'>
        {artists.map((artist) => (
            <div key={artist._id} className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95 transition">
                <Link href={`/artists/${artist.slug.current}`}>
            <Image className="w-full" src={urlFor(artist.image).width(512).height(512).url()} alt={artist.name} width={512} height={512}/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl">{artist.name}</div>
            </div>
            </Link>
          </div>
        ))}
        </div>
    )
}

