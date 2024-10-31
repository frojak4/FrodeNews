import { z } from 'zod'

export const PostSchema = z.object({
    title: z.string().min(3, { message: 'Title must be at least 3 characters' }).max(40, { message: 'Title can only be 30 characters long' }),
    body: z.string().min(15, { message: 'Body must be at least 15 characters long' }).max(2000, { message: 'Body can not be longer than 2000 characters' }),
    picture: z.string().url({ message: 'Please enter a valid URL' }),
    paid: z.boolean({ message: 'Error' }),
    category: z.string({ message: 'Please provide a valid category' }),
    slug: z.string({ message: 'Invalid string' }),
    userId: z.string()
})

export const SignInSchema = z.object({
    email: z.string({ message: 'Please enter valid email' }),
    password: z.string({ message: 'Please enter valid password' })
})

export const SignUpSchema = z.object({
    email: z.string().email({ message: 'Please enter valid email' }),
    fullname: z.string({ message: 'Please enter valid name' }),
    password: z.string({ message: 'Please enter valid password' })
        .min(6, { message: 'Passwords must be between 6-24 characters' })
        .max(24, { message: 'Passwords must be between 6-24 characters' }),
    repeatPassword: z.string({ message: 'Please enter valid password' })
})
    .refine((data) => data.password === data.repeatPassword, {
        message: 'Passwords do not match',
        path: ['repeatPassword']
    })


export type PostSchemaType = z.infer<typeof PostSchema>