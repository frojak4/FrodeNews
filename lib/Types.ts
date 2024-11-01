
export type FrontPagePostType = {
    title: string,
    picture: string,
    createdAt: Date,
    paid: boolean,
    category: string,
    slug: string

}

export type FormState =
    | {
        errors?: {
            fullname?: string[]
            email?: string[]
            password?: string[]
            repeatPassword?: string[]
        }
        message?: string
    }
    | undefined


export type SessionPayload = {
    currentUser: {
        userId: string,
        admin: boolean,
        paid: boolean,
    }
    expires: Date,
}