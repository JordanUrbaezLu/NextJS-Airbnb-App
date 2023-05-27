"use client";

import LoginModal from "../../components/modals/LoginModal";
import PasswordModal from "../../components/modals/PasswordModal";
import RegisterModal from "../../components/modals/RegisterModal";
import RentModal from "../../components/modals/RentModal";
import SearchModal from "../../components/modals/SearchModal";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <RentModal />
      <PasswordModal />
    </>
  );
};

export default ModalsProvider;
