import type { Meta } from "@storybook/react";

import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/modals/Modal";

const meta: Meta<typeof Modal> = {
  title: "Airbnb/Modal",
  component: Modal,
};

export default meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      <Button label="Button" onClick={() => setIsOpen(true)} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => undefined}
        actionLabel="Action Button"
      />
    </>
  );
};
