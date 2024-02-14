import Link from 'next/link'
import React from 'react'

const SideNavbarLink = (props:any) => {
  return (
    <Link href={props.href} className='py-2 hover:bg-black/5 flex items-center gap-6 rounded-xl pl-2 pr-8'>
      {props.icon}
      <span>{props.title}</span>
    </Link>
  )
}

export default SideNavbarLink
