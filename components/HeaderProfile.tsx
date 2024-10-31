'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import profilePic from '@/lib/pics/blank.webp'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'


const HeaderProfile = () => {

    const [toggle, setToggle] = useState<boolean>(false);



    const handleToggleChange = () => {
        setToggle((prev) => !prev);
    }


    return (
        <div>
            <div onClick={handleToggleChange} className="flex items-center justify-end hover:cursor-pointer">
                <Image className="rounded-full border-2 border-lightpurple dark:border-midpurple" alt="profile" src={profilePic} width={50} height={50} />
            </div>
            {toggle && <div className={`absolute h-48 w-44 mt-3 rounded-xl border border-black shadow-lg dark:bg-midpurple bg-slate-200 z-10 p-2 flex flex-col text-lg justify-between`}>
                <span>
                    <Link href={'/sign-up'}><h3 className="border-b border-b-slate-300 dark:border-b-darkpurple p-2">Log In</h3></Link>
                    <h3 className="border-b border-b-slate-300 dark:border-b-darkpurple p-2">Register</h3>
                </span>
                <ThemeSwitcher />
            </div>}

        </div>
    )
}

export default HeaderProfile