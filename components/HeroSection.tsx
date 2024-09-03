import Image from 'next/image'
import logo from 'public/1stdraft-text-blue.svg'

import { RevealLogo } from './Reveal'

export default function HeroSection() {
  return (
    <div className="h-[95vh] flex place-content-center bg-white">
      <RevealLogo>
        <Image src={logo} alt="1stdraft" fill priority />
      </RevealLogo>
    </div>
  )
}
