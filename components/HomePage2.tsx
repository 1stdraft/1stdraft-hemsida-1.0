import LatestSongs from 'components/LatestSongs';
import { motion, useScroll, useTransform } from 'framer-motion';
import {  useRef } from 'react';

import AritstsSection from './ArtistsSection';
import { Reveal } from './Reveal';
import { getSongs } from 'sanity-utils';



export default async function HomePage(  ) {

    const songs = await getSongs();

    return (
        <div className='flex flex-col justify-center mx-auto items-center'>


            {/* <Image className="" alt="draft" src={logo} height={1080} width={1080}/> */}
        {songs.map((song) => (
           <Reveal>
            <h1>{song.title}</h1>
           </Reveal>
       ))}



        </div>
    )
};

