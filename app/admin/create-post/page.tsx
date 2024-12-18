import CreatePostForm from '@/components/admin/CreatePostForm'
import { verifySession } from '@/lib/dal'
import { SessionPayload } from '@/lib/Types'
import { redirect } from 'next/navigation'
import React from 'react'

const CreatePost = async () => {

    const session = await verifySession() as SessionPayload | false
    if (!session) {
        redirect('/')
    }
    if (session.currentUser?.admin === false) {
        redirect('/')
    }


    return (
        <div className="text-center ">
            <h1 className="text-4xl pt-8 text-zinc-950 dark:text-gray-200">Create New Post</h1>
            <CreatePostForm />

        </div>
    )
}

export default CreatePost

