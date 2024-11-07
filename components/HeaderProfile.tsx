'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import profilePic from '@/lib/pics/blank.webp'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { SessionPayload } from '@/lib/Types'
import { IoMenu } from "react-icons/io5";
import { SignOut } from '@/actions/auth'
import { redirect } from 'next/navigation'



const HeaderProfile = ({ session, signOut }: { session: SessionPayload | false, signOut?: () => Promise<never> }) => {

    const [toggle, setToggle] = useState<boolean>(false);
    const handleToggleChange = () => {
        setToggle((prev) => !prev);
    }



    return (
        <div>

            <div onClick={handleToggleChange} className="flex items-center justify-end hover:cursor-pointer">
                {session ?
                    <Image className="rounded-full border-2 border-lightpurple dark:border-midpurple" alt="profile" src={profilePic} width={50} height={50} /> :
                    <IoMenu className="text-4xl dark:text-lightpurple text-midpurple" />}
            </div>
            {toggle && <div className={`absolute h-48 w-44 mt-3 rounded-xl border border-black shadow-lg dark:bg-midpurple bg-slate-200 z-10 p-2 flex flex-col text-lg justify-between`}>
                <span>
                    {session ? <form action={signOut}>
                        <button className="border-b border-b-slate-300 dark:border-b-darkpurple p-2 w-full text-start" type="submit">Log out</button>
                    </form> :
                        <Link href={'/sign-up'}><h3 className="border-b border-b-slate-300 dark:border-b-darkpurple p-2">Log In / Register</h3></Link>}
                </span>
                <ThemeSwitcher />
            </div>}

        </div>
    )
}

export default HeaderProfile