'use client'
import { useLenis } from '@studio-freight/react-lenis'
import { easeInOut, motion } from 'framer-motion'

export default function Navbar() {
  const lenis = useLenis(({ scroll }) => {})

  return (
    // <Reveal idx={2}>
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, delay: 0.75 },
        },
      }}
      initial="hidden"
      animate="visible"
      className="navbar bg-white flex z-10 justify-center sticky top-0 text-lg font-semibold w-full overflow-hidden"
    >
      <div className="flex">
        <button
          className="navbar-item hover:bg-blue hover:text-white transition duration-500 px-2 "
          onClick={() =>
            lenis.scrollTo('#latest-releases', {
              duration: 2,
              easing: easeInOut,
              offset: -30,
            })
          }
        >
          latest releases
        </button>
        <button
          className="navbar-item hover:bg-blue hover:text-white transition duration-500 px-2 "
          onClick={() =>
            lenis.scrollTo('#artists', {
              duration: 2,
              easing: easeInOut,
              offset: -200,
            })
          }
        >
          artists
        </button>
        <button
          className="navbar-item hover:bg-blue hover:text-white transition duration-500 px-2 "
          onClick={() =>
            lenis.scrollTo('#events', { duration: 2, easing: easeInOut })
          }
        >
          events
        </button>
        <button
          className="navbar-item hover:bg-blue hover:text-white transition  duration-500 px-2 "
          onClick={() =>
            lenis.scrollTo('#contact', { duration: 2, easing: easeInOut })
          }
        >
          contact
        </button>
      </div>
    </motion.div>
    // </Reveal>
  )
}
