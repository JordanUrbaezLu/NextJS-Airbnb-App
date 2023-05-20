import { Nunito } from "next/font/google";

import Navbar from "../components/navbar/Navbar";

import ToasterProvider from "../libs/providers/ToasterProvider";

import ModalsProvider from "../libs/providers/ModalsProvider";
import getCurrentUser from "../utils/getCurrentUser";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <ModalsProvider />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
