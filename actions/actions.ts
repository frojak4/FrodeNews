'use server'
import prisma from "@/lib/db";
import { PostSchema } from "@/lib/Schema";



export const createPost = async (prevState: { error: boolean | null, message: string }, formData: FormData) => {


    const paid = formData.get('paid') === null ? false : true;
    const title = formData.get('title') as string
    const slug = title
        .replace(/\s+/g, "-")
        .toLowerCase()


    const ValidatedData = PostSchema.safeParse({
        title: formData.get('title') as string,
        body: formData.get('body') as string,
        picture: formData.get('picture') as string,
        category: formData.get('category') as string,
        paid: paid,
        slug: slug,
        userId: '67121b3d33f7cc3529a7ba4b'
    })

    if (!ValidatedData.success) {
        let errorMessage = ''
        ValidatedData.error.issues.forEach((issue) => {
            errorMessage += issue.message + '. '
        })
        return { error: true, message: errorMessage }
    }

    console.log(ValidatedData.data)


    await prisma.post.create({
        data: ValidatedData.data
    })



    return { error: false, message: `Successfully posted ${ValidatedData.data.slug}` };
}