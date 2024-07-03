import Link from "next/link";
import { RevealCover } from "./RevealCover"
import { getSongs, urlFor } from "sanity-utils";
import { Suspense } from "react";
import Image from 'next/image'
import { motion, useMotionValueEvent } from "framer-motion";



export default async function LatestSongs({zoom}: any) {
    const songs = await getSongs();

    return (
        <div className="grid items-center">
            {songs.map((song, index) => (
                <motion.div style={{ scale: zoom }} className={`${index % 2 ? 'justify-self-start' : 'justify-self-end'}`}>
                <RevealCover width='fit-content' key={song._id} idx={index}>
                <div  className="shadow-md hover:shadow-lg transition">
                <Link scroll={false} href={`/?modal=true&id=${song.slug.current}`} >
                {/* <Link scroll={false} href="/?modal=true" > */}

                <Image className="w-full" src={urlFor(song.coverImage).width(1080).height(1080).url()} alt={song.title} height={300} width={300}/>
                
                </Link>  
                </div>
                </RevealCover>
                </motion.div>
            ))}         
        </div>
    )
    
}