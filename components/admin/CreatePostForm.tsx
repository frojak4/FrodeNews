'use client'
import { createPost } from '@/actions/actions';
import React, { useEffect, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import { CiCircleInfo } from "react-icons/ci";
import Tooltip from '@mui/material/Tooltip'


const SubmitButton = () => {

    const { pending } = useFormStatus()

    return <button className="bg-lightpurple px-8 py-2 w-min rounded-full mx-auto dark:bg-midpurple" type="submit">{pending ? 'Submitting...' : 'Submit'}</button>
}

const CreatePostForm = () => {


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [paid, setPaid] = useState(false)
    const [picture, setPicture] = useState('')
    const [category, setCategory] = useState('')
    const [state, formAction] = useFormState(createPost, { error: null, message: '' });


    const ToolTipText = `FrodeNews uses markdown to display our posts. Click here for a cheat sheet`

    useEffect(() => {
        if (state?.error === true) {
            toast.error(state.message)
        } else if (state?.error === false) {
            toast.success(state.message)
        }
    }, [state])

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value)
    }

    const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPicture(e.target.value)
    }

    const handlePaidChange = () => {
        setPaid((prev) => !prev)
    }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value)
    }


    return (
        <form className="mx-auto flex flex-col w-2/5 mt-8 text-zinc-950 dark:text-gray-200" action={formAction}>
            <Toaster />
            <h3 className="text-left pb-2 dark:text-lightpurple text-midpurple">Title</h3>
            <input className="p-3 border border-zinc-950 dark:border-midpurple mb-6" name="title" type='text' placeholder='Title' value={title} onChange={handleTitleChange} />
            <span className="flex justify-between">
                <h3 className="text-left pb-2 pr-2 dark:text-lightpurple text-midpurple">Body</h3>
                <Tooltip arrow title={<>FrodeNews uses markdown to display our posts. <br /> <a className="underline" href="https://www.markdownguide.org/cheat-sheet/">Click here for a cheat sheet</a></>}>
                    <h1><CiCircleInfo className="text-2xl" /></h1>
                </Tooltip>
            </span>
            <textarea className="p-3 border border-zinc-950 dark:border-midpurple mb-6 h-52" name="body" placeholder='Body' value={body} onChange={handleBodyChange} />
            <h3 className="text-left pb-2 dark:text-lightpurple text-midpurple">Picture</h3>
            <input className="p-3 border border-zinc-950 dark:border-midpurple mb-4" name="picture" type='text' placeholder='Picture' value={picture} onChange={handlePictureChange} />
            <div className="flex justify-between items-start">
                <span className="flex">
                    <h3 className="text-left pr-2 dark:text-lightpurple text-midpurple">Paid: </h3>
                    <input className="text-left" type='checkbox' checked={paid} onChange={handlePaidChange} name="paid" />
                </span>
                <span>
                    <select className="p-2 border border-zinc-950 dark:border-midpurple mb-6" value={category} name="category" onChange={handleCategoryChange}>
                        <option value="News">News</option>
                        <option value="Sports">Sports</option>
                        <option value="Entertainment">Entertainment</option>
                    </select>
                </span>
            </div>
            <SubmitButton />
        </form >
    )
}

export default CreatePostForm