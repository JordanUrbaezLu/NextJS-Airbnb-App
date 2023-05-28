import { NextResponse } from "next/server";

import prisma from "../../../../../../prisma/prismadb";
import { getCurrentUser } from "../../../../../../utils";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const membership = "Premium";

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      membership: membership,
    },
  });

  return NextResponse.json(user);
}
