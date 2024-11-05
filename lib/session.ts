import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from './Types'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256']
        })
        return payload
    } catch (err) {
        console.log(`Failed to verify session, error: ${err}`)
    }
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    if (!session) {
        return null;
    }
    const payload = await decrypt(session) as SessionPayload;
    if (!session || !payload) {
        return null
    }

    payload.expires = new Date(Date.now() + 60 * 60 * 1000)
    const res = NextResponse.next();
    res.cookies.set({
        name: 'session',
        value: await encrypt(payload),
        httpOnly: true,
        expires: payload.expires,
    })

    return res
}

