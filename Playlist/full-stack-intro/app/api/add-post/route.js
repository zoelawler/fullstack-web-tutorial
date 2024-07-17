import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

export async function POST(request) {
    const res = await request.json()
    const { title, content } = res;
    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {
                create: {
                    name: 'Zoe'
                }
            }
        }
    })

    return NextResponse.json({ result })
}