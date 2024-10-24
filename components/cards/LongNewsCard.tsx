import { FrontPagePostType } from '@/lib/Types'
import Image from 'next/image'
import React from 'react'
import { MotionDiv } from '../MotionDiv'
import { TiPlus } from "react-icons/ti";


const LongNewsCard = ({ post, i }: { post: FrontPagePostType, i: number }) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }


    return (
        <MotionDiv
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: i * 0.5,
                ease: "easeInOut",
                duration: 0.5
            }}
            className="w-full bg-slate-200 dark:bg-black text-center p-8 rounded-2xl shadow-md z-0">
            <div className="text-left bg-slate-400 dark:bg-zinc-950 w-min p-1">{post.category}</div>
            <div className=" xl:pb-[40%] lg:pb-[55%] md:pb-[70%] pb-[90%] w-auto max-w-[80%] mx-auto relative">
                {post.paid && <div className="text-3xl bg-slate-500 m-2 z-10 absolute p-1 text-gray-200"><TiPlus /></div>}
                <Image className="rounded-xl" alt="obama" priority src={post.picture} fill objectFit="cover" />
            </div>
            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl p-2 mb-2">{post.title}</h1>
        </MotionDiv>
    )
}

export default LongNewsCard