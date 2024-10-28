import React from 'react'
import prisma from '@/lib/db'
import Image from 'next/image'
import markdownit from 'markdown-it'
import * as sanitizeHtml from 'sanitize-html'



const DisplayPostPage = async ({ params }: { params: { slug: string } }) => {

    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug
        }
    })

    const md = markdownit();

    const htmlBody = md.render(post?.body)
    const cleanBody = sanitizeHtml(htmlBody)



    if (post) {
        return (
            <div className="bg-slate-50 dark:bg-zinc-950 text-zinc-950 dark:text-gray-200 h-max">
                <div className="mx-auto w-3/6 text-center p-8">
                    <div className="border-b border-slate-400 dark:border-midpurple">
                        <div className="xl:pb-[40%] lg:pb-[55%] md:pb-[70%] pb-[90%] w-auto max-w-[80%] mx-auto relative">
                            <Image alt={post.title} src={post.picture} fill objectFit='cover'></Image>
                        </div>
                        <h1 className="text-6xl pt-6 pb-2">{post.title}</h1>
                    </div>
                    <div className="text-left w-3/4 pt-8 mx-auto prose prose-slate prose-xl
                     dark:prose-invert prose-h1:text-xl">
                        <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
                    </div>
                </div>
            </div>
        )
    } else return (
        <h1 className="text-3xl">Could not find post {params.slug}</h1>
    )
}

export default DisplayPostPage