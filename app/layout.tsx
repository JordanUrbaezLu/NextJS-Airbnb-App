import { Nunito } from "next/font/google";

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import RentModal from "../components/modals/RentModal";
import SearchModal from "../components/modals/SearchModal";
import Navbar from "../components/navbar/Navbar";

import ToasterProvider from "../providers/ToasterProvider";

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
        <LoginModal />
        <RegisterModal />
        <SearchModal />
        <RentModal />
        <Navbar currentUser={currentUser} />

        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
