'use server'
import prisma from "@/lib/db"

import { SignInSchema, SignUpSchema } from "@/lib/Schema"
import { encrypt } from "@/lib/session"
import { FormState } from "@/lib/Types"
import bcrypt from 'bcrypt'
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"


export const SignInAction = async (state: FormState, formData: FormData,) => {
    const ValidatedData = SignInSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!ValidatedData.success) {
        return {
            errors: ValidatedData.error.flatten().fieldErrors,
        }
    }


    const user = await prisma.user.findUnique({
        where: {
            email: ValidatedData.data.email.toLowerCase(),
        }
    })

    if (user) {
        const match = await bcrypt.compare(ValidatedData.data.password, user?.password)

        if (match) {
            const currentUser = {
                userId: user.id,
                admin: user.admin,
                paid: user.paidUser
            }
            const expires = new Date(Date.now() + 60 * 60 * 1000)
            const session = await encrypt({ currentUser, expires })
            cookies().set('session', session, { expires, httpOnly: true })
            redirect('/')
        } else {
            return {
                message: 'Wrong password'
            }
        }
    } else {
        return {
            message: 'Could not find account'
        }

    }



}

export const SignUpAction = async (state: FormState, formData: FormData) => {


    const ValidatedData = SignUpSchema.safeParse({
        email: formData.get('email'),
        fullname: formData.get('fullname'),
        password: formData.get('password'),
        repeatPassword: formData.get('repeatPassword'),
    })

    if (!ValidatedData.success) {
        return {
            errors: ValidatedData.error.flatten().fieldErrors
        }
    }
    const hashedPassword = bcrypt.hashSync(ValidatedData.data.password, 10);

    const user = await prisma.user.create({
        data: {
            name: ValidatedData.data.fullname,
            email: ValidatedData.data.email,
            password: hashedPassword,
            paidUser: true,
            admin: true
        }
    })

    if (user) {
        redirect('/')
    } else {
        return {
            message: 'Could not create account'
        }
    }
}

export const SignOut = async () => {
    cookies().set('session', '', { expires: new Date(0) });
    revalidatePath('/')
}

