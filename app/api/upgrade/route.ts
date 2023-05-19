import { NextResponse } from "next/server";

import prisma from "../../../libs/prismadb";
import getCurrentUser from "../../../utils/getCurrentUser";

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
      membership,
    },
  });

  return NextResponse.json(user);
}
