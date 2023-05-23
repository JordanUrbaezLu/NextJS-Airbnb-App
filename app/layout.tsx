import { Nunito } from "next/font/google";

import Navbar from "../components/navbar/Navbar";

import ToasterProvider from "../libs/providers/ToasterProvider";
import ThemeProvider from "../libs/providers/ThemeProvider";
import ModalsProvider from "../libs/providers/ModalsProvider";
import getCurrentUser from "../utils/getCurrentUser";
import "./globals.css";
import classNames from "classnames";

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
      <body className={classNames(font.className, "bg-white dark:bg-black")}>
        <ToasterProvider />
        <ModalsProvider />
        <Navbar currentUser={currentUser} />
        <div className="pb-20 pt-28">
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
