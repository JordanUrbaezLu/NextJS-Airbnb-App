import { Nunito } from "next/font/google";

import Navbar from "../components/navbar/Navbar";

import {
  ToasterProvider,
  ThemeProvider,
  ModalsProvider,
} from "../libs/providers";
import { getCurrentUser } from "../utils";
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
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body className={classNames(font.className, "bg-white dark:bg-black")}>
          <ToasterProvider />
          <ModalsProvider />
          <Navbar currentUser={currentUser} />
          <div className="pb-20 pt-28">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
