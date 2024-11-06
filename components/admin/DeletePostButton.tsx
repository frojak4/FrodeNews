'use client'
import React from 'react'
import { useFormStatus } from 'react-dom';
import { TiDeleteOutline } from "react-icons/ti";
import { ThreeDot } from 'react-loading-indicators'

const DeletePostButton = () => {

    const { pending } = useFormStatus()

    return (
        <button disabled={pending} type="submit" className="text-xl px-2">
            {pending ?
                <ThreeDot color="#7A1CAC" size="medium" text="" textColor="" /> :
                <TiDeleteOutline />
            }

        </button>
    )
}

export default DeletePostButton