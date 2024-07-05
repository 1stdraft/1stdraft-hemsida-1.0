"use client"
import { useLenis } from "@studio-freight/react-lenis"
import { easeInOut, motion } from "framer-motion"

export default function Navbar() {

    const lenis = useLenis(({ scroll }) => {

    })


    return (
    // <Reveal idx={2}>
    <motion.div variants={{
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.75}
        }
    }} initial="hidden"
    animate="visible"
    
    className='flex z-10 justify-center sticky top-0 text-lg font-bold backdrop-blur-md w-full'>        
        <div className='flex'>
            <button className="hover:bg-blue hover:text-white  transition duration-500 px-2 py-2 "  onClick={() => lenis.scrollTo("#about", {duration: 2, easing: easeInOut})}>
                about
            </button>
            <button className="hover:bg-blue hover:text-white transition duration-500 px-2 " onClick={() => lenis.scrollTo("#latest-releases", {duration: 2, easing: easeInOut, offset: -30})}>
                latest releases
            </button>
            <button className="hover:bg-blue hover:text-white transition duration-500 px-2 " onClick={() => lenis.scrollTo("#artists", {duration: 2, easing: easeInOut, offset: -200})}>
                artists
            </button>
            <button className="hover:bg-blue hover:text-white transition duration-500 px-2 " onClick={() => lenis.scrollTo("#events", {duration: 2, easing: easeInOut})}>
                events
            </button>
            <button className="hover:bg-blue hover:text-white transition  duration-500 px-2 " onClick={() => lenis.scrollTo("#contact", {duration: 2, easing: easeInOut})}>
                contact
            </button>
        </div>
    </motion.div>
    // </Reveal>
    )
} 