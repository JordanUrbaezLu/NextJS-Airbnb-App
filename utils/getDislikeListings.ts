import prisma from "../libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export default async function getDislikedListings() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const dislikes = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.dislikeIds || [])],
        },
      },
    });

    const safeDislikes = dislikes.map((dislike) => ({
      ...dislike,
      createdAt: dislike.createdAt.toString(),
    }));

    return safeDislikes;
  } catch (error: any) {
    throw new Error(error);
  }
}
