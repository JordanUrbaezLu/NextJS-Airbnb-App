import type { Meta } from "@storybook/react";

import { useState } from "react";
import Modal from "../components/modals/Modal";
import Button from "../libs/air-design/src/components/Button/Button";

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
