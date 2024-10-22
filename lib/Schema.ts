import { z } from 'zod'

export const PostSchema = z.object({
    title: z.string().min(3, { message: 'Title must be at least 3 characters' }).max(20, { message: 'Title can only be 20 characters long' }),
    body: z.string().min(15, { message: 'Body must be at least 15 characters long' }).max(500, { message: 'Body can not be longer than 500 characters' }),
    picture: z.string().url({ message: 'Please enter a valid URL' }),
    paid: z.boolean({ message: 'Error' }),
    category: z.string({ message: 'Please provide a valid category' })
})

export type PostSchemaType = z.infer<typeof PostSchema>