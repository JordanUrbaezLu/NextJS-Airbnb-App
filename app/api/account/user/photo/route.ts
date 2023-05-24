import { NextResponse } from "next/server";

import prisma from "../../../../../prisma/prismadb";
import getCurrentUser from "../../../../../utils/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { profileImageURL } = body;

  if (!profileImageURL) {
    return NextResponse.error();
  }

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      profileImageURL: profileImageURL,
    },
  });

  return NextResponse.json(user);
}
