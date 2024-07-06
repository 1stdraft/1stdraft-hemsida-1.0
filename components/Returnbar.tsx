import logo from 'public/1stdraft-text-blue.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Returnbar() {
    return (
        <div className='my-2'>
            <Link href="/"> <Image alt="1stdraft" src={logo} height={40} /> </Link>
        </div>
    )
}