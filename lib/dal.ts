import { cookies } from 'next/headers'
import { cache } from 'react'
import 'server-only'
import { decrypt } from './session'
import { SessionPayload } from './Types'


export const verifySession = cache(async () => {
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie) as SessionPayload;

    if (!session?.currentUser) {
        return false
    }
    return session
})