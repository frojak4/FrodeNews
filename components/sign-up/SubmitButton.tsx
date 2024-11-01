'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'


const SubmitButton = ({ text }: { text: string }) => {

    const { pending } = useFormStatus();


    return (
        <button disabled={pending} type="submit" className="p-2 bg-purple-300 dark:bg-midpurple disabled:bg-purple-500 disabled:dark:bg-darkpurple rounded-full mt-8">{text}</button>
    )
}

export default SubmitButton