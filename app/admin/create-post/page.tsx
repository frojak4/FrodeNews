import CreatePostForm from '@/components/admin/CreatePostForm'
import React from 'react'

const CreatePost = () => {
    return (
        <div className="text-center ">
            <h1 className="text-4xl pt-8 text-zinc-950 dark:text-gray-200">Create New Post</h1>
            <CreatePostForm />
        </div>
    )
}

export default CreatePost

