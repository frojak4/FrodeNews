import DashboardPostCard from '@/components/admin/DashboardPostCard'
import { verifySession } from '@/lib/dal'
import prisma from '@/lib/db'
import { SessionPayload } from '@/lib/Types'
import { redirect } from 'next/navigation'
import React from 'react'

const Dashboard = async () => {


    const session = await verifySession() as SessionPayload | false
    if (!session) {
        redirect('/')
    }
    if (session.currentUser?.admin === false) {
        redirect('/')
    }

    const posts = await prisma.post.findMany({
        orderBy: {
            postedAt: 'desc'
        }
    })


    return (
        <div className="w-4/6 mx-auto">
            {posts.map((post, i) => {
                return <DashboardPostCard key={i} post={post} />
            })}
        </div>
    )
}

export default Dashboard