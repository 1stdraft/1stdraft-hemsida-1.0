"use client"
import SongModal from 'components/SongModal';
import { Suspense, useEffect, useRef } from 'react';
import LatestSongs from 'components/LatestSongs';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { getArtists } from 'sanity-utils';
import AritstsSection from './ArtistsSection';
import { user } from '@nextui-org/react';
import { Reveal } from './Reveal';


type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};


export default function HomePage( {searchParams}: SearchParamProps ) {

    const showModal = searchParams?.modal === 'true';
    const songId = searchParams.id;

    const songRef = useRef(null);
     const artistRef = useRef(null);

     const { scrollYProgress: scrollYProgress } = useScroll();
    
     const { scrollYProgress: scrollYProgressSongs } = useScroll({
        target: songRef,
        offset: ['start end', 'end start']
     });

    const { scrollYProgress: scrollYProgressArtists } = useScroll({
        target: artistRef,
        offset: ['start end', 'end start']
     });

     const y1 = useTransform(scrollYProgressArtists, [0,1], [-250 * -1,250 * -1])
     const y2 = useTransform(scrollYProgressArtists, [0,1], [-250,250])

     const zoom = useTransform(scrollYProgressSongs, [0,1], [0.5, 1])

     const y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])




    return (
        <div className='flex flex-col justify-center mx-auto items-center'>
            <motion.div style={{y}} className="absolute -inset-100 -z-10 h-[500vh] w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></motion.div>



            {/* <Image className="" alt="draft" src={logo} height={1080} width={1080}/> */}
            
            <motion.div ref={songRef} className='w-1/2'>
            <LatestSongs zoom={zoom} />
            </motion.div>

            <motion.div ref={artistRef} >
            <AritstsSection x1={y1} x2={y2} />
            </motion.div>


            <div className='h-screen grid place-content-center'>
                <Reveal><h1 className='text-5xl'>hello@1stdraft.com</h1></Reveal>
                
            </div>

    


        </div>
    )
};

