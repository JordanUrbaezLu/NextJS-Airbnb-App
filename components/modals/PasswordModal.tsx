"use client";

import { useState } from "react";
import usePasswordModal from "../../hooks/usePasswordModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../inputs/Input";
import Heading from "../Heading";
import Modal from "./Modal";
import axios from "axios";
import toast from "react-hot-toast";

const PasswordModal = () => {
  const passwordModal = usePasswordModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FieldValues>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("OnSubmit");
    axios
      .post("/api/account/user/membership/password", data)
      .then(() => {
        toast.success("Password Updated!");
        passwordModal.onClose();
      })
      .catch((error) => {
        setError(
          "oldPassword",
          { type: "custom", message: "Incorrect Password" },
          { shouldFocus: true }
        );
        toast.error(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Let's update your password!"
        subtitle="Enter your old and new password."
      />
      <Input
        id="oldPassword"
        label="Old Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="newPassword"
        label="New Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return passwordModal.isOpen ? (
    <Modal
      disabled={isLoading}
      isOpen={passwordModal.isOpen}
      title="Change Password"
      actionLabel="CHANGE"
      onClose={passwordModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  ) : (
    <></>
  );
};

export default PasswordModal;
