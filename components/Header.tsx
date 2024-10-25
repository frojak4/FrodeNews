
import React from 'react'
import { nunito_init, prociono_init } from '@/app/layout'
import HeaderProfile from './HeaderProfile'
import Link from 'next/link'

const Header = () => {
    return (
        <>
            <div className="h-24 bg-slate-50 dark:bg-zinc-950"></div>
            <nav className={`${prociono_init.className} bg-white opacity-95 dark:bg-darkpurple dark:text-gray-200 w-screen h-16 flex fixed top-0 z-10 shadow-md items-center justify-center text-black `}>
                <div className="w-3/5 flex items-center">
                    <Link href={'/'}><h1 className="text-4xl mx-2">FrodeNews</h1></Link>
                    <ul className="flex items-center flex-1">
                        <Link href={'/admin/create-post'}><li className="p-5">Create Post</li></Link>
                        <li className="p-5">News</li>
                    </ul>
                    <span className={nunito_init.className}>
                        <HeaderProfile />
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Header