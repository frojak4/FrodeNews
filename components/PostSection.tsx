import React from 'react'
import LongNewsCard from './cards/LongNewsCard'
import NormalNewsCard from './cards/NormalNewsCard'
import { fetchPosts } from '@/actions/actions'
import { FrontPagePostType } from '@/lib/Types'



const PostSection = async () => {

    const data: FrontPagePostType[] = await fetchPosts(6, 0);
    return (
        <>
            <div className="w-8/12 sm:w-3/5 min-h-screen mx-auto relative flex flex-wrap ">
                <LongNewsCard i={1} post={data[0]} />
                <div className="w-full h-full flex mt-4 justify-between">
                    <NormalNewsCard i={2} post={data[1]} />
                    <NormalNewsCard i={3} post={data[2]} />
                </div>
            </div>
            <div className=" w-8/12 sm:w-3/5 min-h-screen mx-auto flex flex-wrap">
                <LongNewsCard i={4} post={data[3]} />
                <div className="w-full h-full flex mt-4 justify-between">
                    <NormalNewsCard i={5} post={data[4]} />
                    <NormalNewsCard i={6} post={data[5]} />
                </div>
            </div>
        </>
    )
}

export default PostSection