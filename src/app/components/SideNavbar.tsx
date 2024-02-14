import { ArrowBigRightDash, ArrowRight, ChevronRight, CircleUserRound, Home, MonitorPlay, PlaySquare, SquareUserRound, ThumbsUp } from 'lucide-react'
import React from 'react'
import SideNavbarLink from './SideNavbarLink'
import Link from 'next/link'

const SideNavbar = () => {
  return (
    <div className='fixed top-20 h-screen px-4'>
      <div className="border-b border-1-gray-100 pb-2">
      <SideNavbarLink href="/" icon={<Home size={20}/>} title="Home"/>
      <SideNavbarLink href="/" icon={<PlaySquare size={20}/>} title="Shorts"/>
      <SideNavbarLink href="/" icon={<MonitorPlay size={20}/>} title="Subscriptions"/>
      </div>
      <div>
      <Link href="/" className='py-2 hover:bg-black/5 flex items-center gap-2 rounded-xl pl-2 pr-8'>
      <p className='font-semibold'>You</p> <ChevronRight />
    </Link>
      </div>
      <div className="border-b border-1-gray-100 pb-2 pt-2">
      <SideNavbarLink href="/" icon={<CircleUserRound size={20}/>} title="Your Channel"/>
      <SideNavbarLink href="/" icon={<ThumbsUp size={20}/>} title="Liked videos"/>
      </div>
      <div className="pt-2 border-b border-1-gray-100 pb-2">
        <p className='font-semibold'>Subscriptions</p>
      </div>
    </div>
  )
}

export default SideNavbar
