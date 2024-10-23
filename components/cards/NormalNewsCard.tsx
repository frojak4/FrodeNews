import Image from 'next/image'
import React from 'react'

const NormalNewsCard = () => {
    return (
        <div className="bg-slate-200 dark:bg-black p-8 text-center mb-8 rounded-2xl shadow-md">
            <div className="mx-auto h-auto w-auto relative xl:pb:[50%] lg:pb-[70%] pb-[80%]">
                <Image className="rounded-xl" alt="obama" src={'https://image.minerva.no/161670.webp?imageId=161670&width=960&height=548&format=jpg'} fill objectFit="cover" />
            </div>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl p-2 mb-2">Overskrift skaper terror i statene</h1>
        </div>
    )
}

export default NormalNewsCard