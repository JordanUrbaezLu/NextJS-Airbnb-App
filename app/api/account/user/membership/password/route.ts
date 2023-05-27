import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import prisma from "../../../../../../prisma/prismadb";
import getCurrentUser from "../../../../../../utils/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser || !currentUser?.hashedPassword) {
    return NextResponse.json({ error: "Unauthorized User" }, { status: 403 });
  }

  const body = await request.json();
  const { oldPassword, newPassword } = body;

  const isCorrectPassword = await bcrypt.compare(
    oldPassword,
    currentUser.hashedPassword
  );

  if (!isCorrectPassword) {
    return NextResponse.json({ error: "Incorrect Password" }, { status: 403 });
  }

  const newHashedPassword = await bcrypt.hash(newPassword, 12);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      hashedPassword: newHashedPassword,
    },
  });

  return NextResponse.json(user);
}
