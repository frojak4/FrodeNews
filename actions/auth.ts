'use server'
import prisma from "@/lib/db"

import { SignInSchema, SignUpSchema } from "@/lib/Schema"
import { FormState } from "@/lib/Types"

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
            password: ValidatedData.data.password
        }
    })

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
}