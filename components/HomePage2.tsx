import LatestSongs from 'components/LatestSongs';
import { motion, useScroll, useTransform } from 'framer-motion';
import {  useRef } from 'react';

import AritstsSection from './ArtistsSection';
import { Reveal } from './Reveal';
import { getSongs } from 'sanity-utils';
import { RevealCover } from './RevealCover';



export default async function HomePage2({children}) {

    return (
        <div className='flex flex-col justify-center mx-auto items-center'>
            {children}
        </div>
    )
};

