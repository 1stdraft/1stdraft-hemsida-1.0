import Image from "next/image"
import logo from 'public/1stdraft-text-blue.svg'

import { WordReveal } from "./Reveal"



export default function AboutSection() {

    return (
        <div id="about" className="h-[75vh] flex justify-center items-center bg-blue">
            <div className="sm:w-1/2">
            <WordReveal className="flex flex-wrap justify-center font-bold text-xl sm:text-5xl text-white" classNameWords="mx-2 md:my-2" value="1stdraft is an independent record label based in Stockholm. It was founded in 2024 with the goal to diversify today's music scene and help new talents reach their audience." />
            </div>
        </div>
    )
}