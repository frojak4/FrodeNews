'use server'
import prisma from "@/lib/db";
import { PostSchema } from "@/lib/Schema";



export const createPost = async (prevState: { error: boolean | null, message: string }, formData: FormData) => {


    const paid = formData.get('paid') === null ? false : true;
    const title = formData.get('title') as string
    const slug = title
        .replace(/\s+/g, "-")
        .replace(/æ/g, 'ae')
        .replace(/å/g, 'aa')
        .replace(/ø/g, 'o')
        .replace(/Æ/g, 'Ae')
        .replace(/Å/g, 'Aa')
        .replace(/Ø/g, 'O')
        .toLowerCase();


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



    await prisma.post.create({
        data: ValidatedData.data
    })



    return { error: false, message: `Successfully posted ${ValidatedData.data.slug}` };
}


export const fetchPosts = async (limit: number, skip: number) => {
    const data = prisma.post.findMany({
        skip: skip,
        take: limit,
        orderBy: {
            createdAt: 'desc'
        }
    })

    return data;
}