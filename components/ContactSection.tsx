import Link from "next/link";
import { Reveal } from "./Reveal";

export default function ContactSection() {

    return(
        <div id="contact" className='h-screen grid items-center text-center'>
            <Reveal>
                <div className="">
                <h2 className="text-4xl">get in touch</h2>
                <Link href="mailto:hello@1stdraft.eu" className='text-5xl text-white bg-blue px-1 m-2 hover:bg-slate-600 '>hello@1stdraft.eu</Link>
                </div>
            </Reveal>
        </div>
    )

}