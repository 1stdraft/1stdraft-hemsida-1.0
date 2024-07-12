'use client'

import LatestSongs from 'components/LatestSongs'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import AritstsSection from './ArtistsSection'
import { Reveal } from './Reveal'

// import { useTheme } from 'components/ThemeProvider';

const HomePage = ({ children }: { children: React.ReactNode }) => {
  // const songRef = useRef(null);
  //  const artistRef = useRef(null);

  //  const { scrollYProgress: scrollYProgress } = useScroll();

  //  const { scrollYProgress: scrollYProgressSongs } = useScroll({
  //     target: songRef,
  //     offset: ['start end', 'end start']
  //  });

  // const { scrollYProgress: scrollYProgressArtists } = useScroll({
  //     target: artistRef,
  //     offset: ['start end', 'end start']
  //  });

  //  const y1 = useTransform(scrollYProgressArtists, [0,1], [-250 * -1,250 * -1])
  //  const y2 = useTransform(scrollYProgressArtists, [0,1], [-250,250])

  //  const zoom = useTransform(scrollYProgressSongs, [0,1], [0.5, 1])

  //  const y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])

  return (
    <div className="flex flex-col justify-center mx-auto items-center">
      {/* <motion.div style={{}} className="absolute -inset-100 -z-10 h-[500vh] w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></motion.div> */}

      {/* <Image className="" alt="draft" src={logo} height={1080} width={1080}/> */}

      {/* <motion.div ref={null} className='w-1/2'>
            <LatestSongs zoom={null} />
            </motion.div>

            <motion.div ref={null} >
            <AritstsSection x1={null} x2={null} />
            </motion.div> */}

      <div className="h-screen grid place-content-center">
        <h1 className="text-5xl">hello@1stdraft.eu</h1>
      </div>

      {children}
    </div>
  )
}

export default HomePage
