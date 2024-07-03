import { getArtists } from 'sanity-utils'
import { Artist } from 'types/Artist';
import { Reveal } from './Reveal';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default async function AritstsSection({x1, x2}: any) {
    const artists = await getArtists();

    return (

        <div className='h-screen flex flex-col justify-center items-center overflow-hidden'>
        {artists.map((artist, index) => (
            <Reveal key={artist._id} idx={index}>
            <motion.div style={{x: x2}} >
            <Link href={`/artists/${artist.slug.current}`} className='relative flex whitespace-nowrap gap-10' >
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
                <p className='text-7xl'>{artist.name}</p>
            </Link>
            </motion.div>
            </Reveal>
        ))}
        </div>
    )
}
