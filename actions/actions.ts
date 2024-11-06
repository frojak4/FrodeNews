'use server'
import { verifySession } from "@/lib/dal";
import prisma from "@/lib/db";
import { PostSchema } from "@/lib/Schema";
import { SessionPayload } from "@/lib/Types";
import { revalidatePath } from "next/cache";



export const createPost = async (prevState: { error: boolean | null, message: string }, formData: FormData) => {


    const session = await verifySession() as SessionPayload | false;

    if (!session) {
        return
    }
    if (!session.currentUser.admin) {
        return
    }

    const paid = formData.get('paid') === null ? false : true;

    const date = formData.get('postNow') === null ? new Date(formData.get('date') as string).toISOString() : new Date(Date.now()).toISOString()

    console.log(date);

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
        userId: session.currentUser.userId,
        postedAt: date,
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

export const deletePost = async (prevState: { error: boolean | null, message: string }, formData: FormData) => {

    const slug = formData.get('slug') as string;

    await prisma.post.delete({
        where: {
            slug: slug
        }
    })

    revalidatePath('/admin/dashboard');
}


export const fetchPosts = async (limit: number, skip: number) => {
    const data = prisma.post.findMany({
        skip: skip,
        take: limit,
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            postedAt: {
                lt: new Date().toISOString()
            }
        }
    })

    return data;
}