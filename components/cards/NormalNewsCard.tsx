import { FrontPagePostType } from '@/lib/Types'
import Image from 'next/image'
import React from 'react'
import { MotionDiv } from '../MotionDiv'
import { TiPlus } from "react-icons/ti";
import Link from 'next/link';

const NormalNewsCard = ({ post, i }: { post: FrontPagePostType, i: number }) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }


    return (
        <MotionDiv variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: i * 0.5,
                ease: "easeInOut",
                duration: 0.5
            }}
            className="bg-slate-200 dark:bg-black p-8 text-center mb-8 rounded-2xl w-[48%] mx-2 shadow-md  max-h-[36rem]">
            <Link href={`/posts/${post.slug}`}>
                <div className="text-left bg-slate-400 dark:bg-zinc-950 w-min p-1">{post.category}</div>
                <div className="mx-auto h-auto w-full relative xl:pb:[50%] lg:pb-[80%] pb-[80%]">
                    {post.paid && <div className="text-3xl bg-slate-500 m-2 z-10 absolute p-1 text-gray-200"><TiPlus /></div>}
                    <Image className="rounded-xl" alt="obama" src={post.picture} fill objectFit="cover" />
                </div>
                <h1 className="lg:text-4xl md:text-3xl sm:text-2xl p-2 ">{post.title}</h1>
            </Link>
        </MotionDiv>
    )
}

export default NormalNewsCard