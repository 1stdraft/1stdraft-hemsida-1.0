import logo from 'public/1stdraft-text-blue.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
    <div className='py-8 flex justify-between'>
<Link href="/"><Image src={logo} alt='1stdraft' width={150} /></Link>        
        
        <div className='flex gap-3'>
            <Link href={'/about'}>about</Link>
            <Link href={'/artists'}>artists</Link>
            <Link href={'/contact'}>contact</Link>
        </div>
    </div>
    )
} 