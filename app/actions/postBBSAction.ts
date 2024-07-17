"use server"

import { NextResponse } from "next/server";
import { formSchema } from "../bbs-posts/create/page"
import { z } from "zod";
import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBBS = async ({
    username,
    title,
    content
}: z.infer<typeof formSchema>) => {

    const post = await prisma.post.create({
        data: {
            username,
            title,
            content,
        },
    });

    revalidatePath("/");

    redirect("/");
}