import { NextResponse } from "next/server";

import getCurrentUser from "../../../app/actions/getCurrentUser";
import prisma from "../../../app/libs/prismadb";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const membership = null;

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      membership,
    },
  });

  return NextResponse.json(user);
}
