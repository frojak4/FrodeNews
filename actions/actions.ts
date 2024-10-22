import prisma from "@/lib/db";
import { z } from 'zod'
import { PostSchema, PostSchemaType } from "@/lib/Schema";


export const createPost = async (prevState: string, formData: FormData) => {

    const ValidatedData = PostSchema.safeParse({
        title: formData.get('title') as string,
        body: formData.get('body') as string,
        picture: formData.get('picture') as string,
        category: formData.get('category') as string,
        paid: formData.get('paid')
    })

    if (!ValidatedData.success) {
        let errorMessage = ''

    }


    return 'Frode2'
}