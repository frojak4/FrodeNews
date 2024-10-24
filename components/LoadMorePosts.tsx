'use client'
import { fetchPosts } from '@/actions/actions'
import { FrontPagePostType } from '@/lib/Types'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import NormalNewsCard from './cards/NormalNewsCard'
import { ThreeDot } from 'react-loading-indicators'

const LoadMorePosts = () => {

    const [posts, setPosts] = useState<FrontPagePostType[]>([])
    const [index, setIndex] = useState<number>(6)
    const [loadedAll, setLoadedAll] = useState<boolean>(false)
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchPosts(4, index).then((res) => {
                if (res.length !== 4) {
                    setLoadedAll(true)
                }
                setPosts([...posts, ...res])
                setIndex(index + 4)
            })

        }

    }, [inView])

    return (

        <div>
            <div className="w-8/12 sm:w-3/5 mx-auto pt-8 justify-between flex flex-wrap">
                {posts.map((post, i) => {
                    return <NormalNewsCard i={i} key={i} post={post} />
                })}
            </div>
            {!loadedAll ?
                <div ref={ref} className="text-center">
                    <ThreeDot color="#7A1CAC" size="medium" text="" textColor="" />
                </div>
                :
                <div className="text-center"><h3>No more posts</h3></div>
            }

        </div>
    )
}

export default LoadMorePosts