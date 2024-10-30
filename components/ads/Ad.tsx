'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Ad1 from './Ad1.png'
import Ad2 from './Ad2.png'
import Ad3 from './Ad3.png'
import Ad4 from './Ad4.png'
import Ad5 from './Ad5.png'
import Ad6 from './Ad6.png'
import Ad7 from './Ad7.png'
import Ad8 from './Ad8.png'
import Ad9 from './Ad9.png'
import Ad10 from './Ad10.png'
import Ad11 from './Ad11.png'
import Ad12 from './Ad12.png'
import Ad13 from './Ad13.png'
import Ad14 from './Ad14.png'



const Ad = () => {

    const ads = [Ad1, Ad2, Ad3, Ad4, Ad5, Ad6, Ad7, Ad8, Ad9, Ad10, Ad11, Ad12, Ad13, Ad14]
    const [ad1, setAd1] = useState(0);
    const [ad2, setAd2] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setAd1(Math.floor(Math.random() * ads.length))
            setAd2(Math.floor(Math.random() * ads.length))
        }, 10000)
        return () => clearInterval(interval)

    }, [])


    return (
        <>
            <div className="fixed w-1/6 h-1/6 top-40 left-10">
                <h3 className="z-10 fixed bg-slate-500">Advertisement</h3>
                <Image className="rounded-lg" src={ads[ad1]} alt="advertisement" width={250} height={250} />
            </div>
            <div className="fixed w-1/6 h-1/6 top-40 right-5">
                <h3 className="z-10 fixed bg-slate-500">Advertisement</h3>
                <Image className="rounded-lg" src={ads[ad2]} alt="advertisement" width={250} height={250} />
            </div>
        </>
    )
}

export default Ad