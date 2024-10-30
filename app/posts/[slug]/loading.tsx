import React from 'react'
import { ThreeDot } from 'react-loading-indicators'

const Loading = () => {
    return (
        <div className="w-full h-screen bg-slate-50 dark:bg-zinc-950 flex justify-center">
            <ThreeDot color="#7A1CAC" size="medium" text="" textColor="" />
        </div>
    )
}

export default Loading