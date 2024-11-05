import { verifySession } from '@/lib/dal'
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


    return (
        <div>page</div>
    )
}

export default Dashboard