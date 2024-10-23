import Image from 'next/image'
import React from 'react'
import LongNewsCard from './cards/LongNewsCard'
import NormalNewsCard from './cards/NormalNewsCard'

const PostSection = () => {


    return (
        <div className=" w-8/12 sm:w-3/5 min-h-screen mx-auto pt-8 flex flex-wrap ">
            <LongNewsCard />

            <div className="w-full h-full flex mt-4 justify-between gap-4">


                <NormalNewsCard />
                <NormalNewsCard />

            </div>
        </div>
    )
}

export default PostSection