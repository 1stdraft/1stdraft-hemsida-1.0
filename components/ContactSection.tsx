import Link from "next/link";
import { Reveal } from "./Reveal";
import { getSettings } from "sanity-utils";
import { set } from "sanity";

export default async function ContactSection() {

    const settings = await getSettings()

    return(
        <div id="contact" className='h-[75vh] w-full grid lg:grid-cols-3 items-center justify-items-center text-center bg-blue'>
            <Reveal>
                <div className="">
                <h2 className="text-3xl text-white py-2">instagram</h2>
                <Link href={`mailto:${settings.email}`} className='text-4xl text-blue bg-white px-1 m-2 hover:bg-transparent hover:text-white transition'>@1stdrft</Link>
                </div>
            </Reveal>
            <Reveal>
                <div className="">
                <h2 className="text-4xl text-white">get in touch</h2>
                <Link href={`mailto:${settings.email}`} className='text-5xl text-blue bg-white px-1 m-2 hover:bg-transparent hover:text-white transition'>{settings.email}</Link>
                </div>
            </Reveal>
            <Reveal>
                <div className="">
                <h2 className="text-3xl text-white py-2">youtube</h2>
                <Link href={`mailto:${settings.email}`} className='text-4xl text-blue bg-white px-1 m-2 hover:bg-transparent hover:text-white transition'>1stdraftMUSIC</Link>
                </div>
            </Reveal>
        </div>
    )

}