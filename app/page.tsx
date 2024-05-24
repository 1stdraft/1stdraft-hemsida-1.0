import ArtistsSection from 'components/ArtistsSection'
import HeroSection from 'components/HeroSection';
import Navbar from 'components/Navbar'
import Image from 'next/image'
import Link from 'next/link';
import { getSongs, urlFor } from 'sanity-utils';



export default async function Home() {
    const songs = await getSongs();


    return (
        <div className='lg:w-1/2 mx-3'>

            <HeroSection />

        


        {/* LATEST RELEASES */}
        <div>
            <h1 className='text-3xl text-bold py-4'>Latest Releases</h1>
        <div className='grid grid-cols-3 gap-3'>
            {songs.map((song) => (
                <div  key={song._id}  className="max-w-sm rounded overflow-hidden shadow-md hover:scale-95 transition">
                <Link href={`/song/${song.slug.current}`} >
                <Image className="w-full" src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} height={1080} width={1080}/>
                
                </Link>  
                </div>
            ))}
                  
        </div>
        </div>
        </div>
    )
};