import Image from 'next/image'
import React from 'react'
import profilePic from '@/lib/pics/blank.webp'
import { prociono_init } from '@/app/layout'

const Header = () => {
    return (
        <nav className={"bg-white h-16 flex items-center justify-center text-black" + prociono_init.className}>
            <div className="w-4/5 flex items-center">
                <h1 className="text-black text-4xl ml-2 flex-1">FrodeNews</h1>
                <ul className="flex items-center">
                    <li className="p-5">Weather</li>
                    <li className="p-5">News</li>
                </ul>
                <div className="flex items-center w-4/6 justify-end">
                    <Image className="rounded-full" alt="profile" src={profilePic} width={50} height={50} />


                </div>
            </div>
        </nav>
    )
}

export default Header