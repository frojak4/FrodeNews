import { verifySession } from '@/lib/dal'
import React from 'react'
import Ad from './Ad';
import { SessionPayload } from '@/lib/Types';




const AdCheck = async () => {

    const session = await verifySession() as SessionPayload | false;
    if (!session) {
        return <Ad />
    }
    if (session.currentUser?.paid === false) {
        return <Ad />
    }
    if (session.currentUser?.paid) {
        return
    }

}

export default AdCheck