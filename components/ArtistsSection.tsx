import Link from 'next/link';
import { getArtists } from 'sanity-utils'

import { RevealArtists } from './RevealArtists';

export default async function AritstsSection({x1, x2}: any) {
    const artists = await getArtists();

    return (

        <div className='h-screen flex flex-col justify-center items-center'>
        {artists.map((artist, index) => (
            <RevealArtists key={artist._id} idx={index}>
            <Link href={`/artists/${artist.slug.current}`} className='relative flex whitespace-nowrap gap-10 text-5xl sm:text-7xl' >
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
                <p className=''>{artist.name}</p>
            </Link>
            </RevealArtists>
        ))}
        </div>
    )
}
