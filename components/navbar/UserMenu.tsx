"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import useRentModal from "../../hooks/useRentModal";
import { SafeUser } from "../../types";

import axios from "axios";
import toast from "react-hot-toast";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import Avatar from "../Avatar";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuTrigger = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([menuRef, menuTrigger], () => setIsOpen(false));

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  const handleUpgradeMembership = () => {
    axios
      .post("/api/upgrade")
      .then(() => {
        toast.success("Upgraded to Premium Membership!");
        router.refresh();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleCancelMembership = () => {
    axios
      .post("/api/cancel")
      .then(() => {
        toast.success("Canceled Membership");
        router.refresh();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleNavigate = (route: string) => {
    setIsOpen(false);
    router.push(route);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            cursor-pointer
            rounded-full 
            px-4 
            py-3 
            text-sm 
            font-semibold 
            transition 
            hover:bg-neutral-100 
            md:block
          "
        >
          Airbnb your home
        </div>
        <div
          ref={menuTrigger}
          onClick={toggleOpen}
          className="
          flex
          cursor-pointer
          flex-row
          items-center 
          gap-3 
          rounded-full 
          border-[1px] 
          border-neutral-200 
          p-4 
          transition 
          hover:shadow-md 
          md:px-2 
          md:py-1
          "
        >
          <AiOutlineMenu className="dark:text-white" />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      <div ref={menuRef}>
        {isOpen && (
          <div
            className="
            absolute 
            right-0 
            top-12
            w-[40vw]
            overflow-hidden 
            rounded-xl 
            bg-white 
            text-sm 
            shadow-full
            md:w-3/4
          "
          >
            <div className="flex cursor-pointer flex-col">
              {currentUser ? (
                <div>
                  {currentUser?.membership && (
                    <>
                      <div
                        className="flex items-center justify-center gap-2 p-2"
                        onClick={() => handleNavigate("/account")}
                      >
                        <Logo isLink={false} size={60} />
                        <b>Premium</b>
                      </div>
                      <hr />
                    </>
                  )}
                  <MenuItem
                    label="My trips"
                    onClick={() => handleNavigate("/trips")}
                  />
                  <MenuItem
                    label="My dislikes"
                    onClick={() => handleNavigate("/dislikes")}
                  />
                  <MenuItem
                    label="My favorites"
                    onClick={() => handleNavigate("/favorites")}
                  />
                  <MenuItem
                    label="My reservations"
                    onClick={() => handleNavigate("/reservations")}
                  />
                  <MenuItem
                    label="My properties"
                    onClick={() => handleNavigate("/properties")}
                  />
                  <MenuItem
                    label="Airbnb your home"
                    onClick={() => {
                      rentModal.onOpen();
                      setIsOpen(false);
                    }}
                  />
                  {!currentUser?.membership && (
                    <MenuItem
                      label="Upgrade to Premium Membership"
                      onClick={handleUpgradeMembership}
                    />
                  )}
                  {!!currentUser?.membership && (
                    <MenuItem
                      label="Cancel Premium"
                      onClick={handleCancelMembership}
                    />
                  )}
                  <hr />
                  <MenuItem label="Logout" onClick={() => signOut()} />
                </div>
              ) : (
                <>
                  <MenuItem
                    label="Login"
                    onClick={() => {
                      setIsOpen(false);
                      loginModal.onOpen();
                    }}
                  />
                  <MenuItem
                    label="Sign up"
                    onClick={() => {
                      setIsOpen(false);
                      registerModal.onOpen();
                    }}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
