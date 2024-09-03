import Image from 'next/image'
import logo from 'public/1stdraft-text-blue.svg'

import { TransitionLink } from './TransitionLink'

export default function Returnbar() {
  return (
    <div className="my-2">
      <TransitionLink href="/">
        {' '}
        <Image alt="1stdraft" src={logo} height={40} />{' '}
      </TransitionLink>
    </div>
  )
}
