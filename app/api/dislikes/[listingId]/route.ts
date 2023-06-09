import { NextResponse } from "next/server";

import prisma from "../../../../prisma/prismadb";
import { getCurrentUser } from "../../../../utils";

interface IParams {
  listingId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let dislikeIds = [...(currentUser.dislikeIds || [])];

  dislikeIds.push(listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      dislikeIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let dislikeIds = [...(currentUser.dislikeIds || [])];

  dislikeIds = dislikeIds.filter((id) => id !== listingId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      dislikeIds,
    },
  });

  return NextResponse.json(user);
}
