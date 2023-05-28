"use client";

import toast from "react-hot-toast";
import AirButton from "../../libs/air-design/src/components/AirButton/AirButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { usePasswordModal } from "../../hooks";

const UpdateImageForm = () => {
  const router = useRouter();
  const passwordModal = usePasswordModal();

  const [imageURL, setImageURL] = useState<string>("");

  const handleUpdateProfileURL = (URL: string) => {
    axios
      .post("/api/account/user/photo", { profileImageURL: imageURL })
      .then(() => {
        toast.success(`Updated photo URL to: ${imageURL}`);
        router.refresh();
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  console.log(imageURL);

  return (
    <div>
      <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
      <AirButton onClick={() => handleUpdateProfileURL(imageURL)}>
        Change Profile Picture
      </AirButton>
      <AirButton onClick={() => passwordModal.onOpen()}>
        Change Password
      </AirButton>
    </div>
  );
};

export default UpdateImageForm;
