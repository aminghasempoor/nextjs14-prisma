"use server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/db";
import {authOptions} from "@/lib/auth";

export async function addTowatchlist(formData: FormData) {
    "use server";
    const movieId = formData.get("movieId");
    const pathname = formData.get("pathname") as string;
    const session = await getServerSession(authOptions);

    const data = await prisma.watchList.create({
        data: {
            userId: session?.user?.email as string,
            movieId: Number(movieId),
        },
    });
    revalidatePath(pathname);
}

export async function deleteFromWatchlist(formData: FormData) {
    "use server";

    const watchlistId = formData.get("watchlistId") as string;
    const pathname = formData.get("pathname") as string;

    const data = await prisma.watchList.delete({
        where: {
            id: watchlistId,
        },
    });
    revalidatePath(pathname);
}