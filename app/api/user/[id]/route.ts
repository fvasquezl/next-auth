import prisma from "@/app/lib/prisma";


export async function GET(request: Request, { params }: { params: { id: number } }) {
    const UserPosts = await prisma.post.findMany({
        where: { authorId: params.id },
        include: {
            author: {
                select: {
                    email: true,
                    name: true
                }
            }
        }
    })

    return new Response(JSON.stringify(UserPosts))
}
