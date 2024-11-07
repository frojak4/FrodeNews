'use client'
import { CheckIfPosted } from '@/lib/utils'
import React from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { MdPending } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import DeletePostButton from './DeletePostButton';
import { useFormState } from 'react-dom';
import { deletePost } from '@/actions/actions';
import Link from 'next/link'


type DashBoardPostCardType = {
    post: {
        title: string,
        postedAt: Date,
        picture: string,
        slug: string
    }
}

const DashboardPostCard = ({ post }: DashBoardPostCardType) => {


    const [state, deleteAction] = useFormState(deletePost, undefined)

    const date = dayjs(post.postedAt).format('DD MMMM YYYY')
    const posted = CheckIfPosted(post.postedAt)
    return (
        <div className="bg-slate-200 dark:bg-black rounded-xl m-6 p-4 flex items-center">
            <div className="p-4">
                <Image alt={post.title} src={post.picture} width={150} height={150} />
            </div>
            <div className="flex-1">
                <Link href={`/posts/${post.slug}`}>
                    <h1 className="p-2 text-xl font-semibold truncate">{post.title}</h1>
                </Link>
                <h3 className="p-2">{posted ? `Posted at ${date}` : `Will be posted at ${date}`}</h3>
            </div>
            <div className="pr-2 text-xl flex">
                {posted ? <FaCheckCircle className="text-green-600" /> : <MdPending className="text-yellow-400" />}
                <form action={deleteAction}>
                    <input type="hidden" value={post.slug} name="slug" />
                    <DeletePostButton />
                </form>
            </div>

        </div>
    )
}

export default DashboardPostCard