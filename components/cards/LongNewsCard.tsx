import Image from 'next/image'
import React from 'react'

const LongNewsCard = () => {
    return (
        <div className="w-full bg-slate-200 dark:bg-black text-center p-8 rounded-2xl shadow-md">
            <div className=" xl:pb-[40%] lg:pb-[55%] md:pb-[70%] pb-[90%] w-auto max-w-[80%] mx-auto relative">
                <Image className="rounded-xl" alt="obama" src={'https://image.minerva.no/161670.webp?imageId=161670&width=960&height=548&format=jpg'} fill objectFit="cover" />
            </div>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl p-2 mb-2">Overskrift skaper terror i statene</h1>
        </div>
    )
}

export default LongNewsCard