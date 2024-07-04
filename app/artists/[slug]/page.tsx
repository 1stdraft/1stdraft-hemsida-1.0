import { PortableText } from '@portabletext/react';
import Returnbar from 'components/Returnbar';
import IconSpotify from 'components/SpotifyIcon';
import Image from 'next/image';
import Link from 'next/link';
import { getAllSongs, getArtist, getSongsFromArtist, urlFor } from 'sanity-utils'
import { Artist } from 'types/Artist';

type Props = {
    params: { slug: string }
}

export default async function AritstPage({ params }: Props) {
    const slug = params.slug;
    const artist = await getArtist(slug);
    const artistId = artist._id;
    const songs = await getSongsFromArtist(artistId);



    return (
        <div>
            <Returnbar />

        <div className='flex justify-center'>
        <div className='w-2/3 flex flex-col'>
            <div className=''>
                    <Image src={urlFor(artist.image).width(1920).height(1080).url()} alt={artist.name} width={1920} height={1080} className=''/>
            </div>
            <div className='flex justify-between items-center py-3'>
                <div>
                    <h1 className='text-bold text-5xl'>{artist.name}</h1>
                </div>
                <div>
                    <Link href={artist.spotify} className="">
                    <IconSpotify />
                    </Link>
                </div>
            </div>
            
            <div>
                <PortableText value={artist.about}/>

                
            </div>
            <div className='flex flex-row gap-3 justify-evenly py-10'>
                {songs.map((song, idx) => (
                    <Image key={idx} alt={song.title} src={song.imageUrl} height={300} width={300} />
                ))}
                </div>
            
        </div>
        </div>
        </div>
    )
}

