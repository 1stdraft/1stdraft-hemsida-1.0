'use client'

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { MotionValue, useScroll, useTransform } from 'framer-motion'
import { createContext, useContext, useRef } from 'react'

// const songRef = useRef(null);
// const artistRef = useRef(null);

// const { scrollYProgress: scrollYProgress } = useScroll();

// const { scrollYProgress: scrollYProgressSongs } = useScroll({
//         target: songRef,
//         offset: ['start end', 'end start']
//      });

//      const { scrollYProgress: scrollYProgressArtists } = useScroll({
//         target: artistRef,
//         offset: ['start end', 'end start']
//      });

// const y1 = useTransform(scrollYProgressArtists, [0,1], [-250 * -1,250 * -1])
// const y2 = useTransform(scrollYProgressArtists, [0,1], [-250,250])

// const zoom = useTransform(scrollYProgressSongs, [0,1], [0.5, 1])

// const y = useTransform(scrollYProgress, [0,1], ["0%", "75%"])

type Scroll = MotionValue

const ScrollContext = createContext<MotionValue>(null)

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress: scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 1], [-500, 500])

  return (
    <ReactLenis root>
      <ScrollContext.Provider value={scrollYProgress}>
        {children}
      </ScrollContext.Provider>
    </ReactLenis>
  )
}

export const useScrollContext = () => useContext(ScrollContext)
