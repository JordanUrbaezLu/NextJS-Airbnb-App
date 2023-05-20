import type { Meta } from "@storybook/react";

import { useState } from "react";
import Modal from "../components/modals/Modal";
import AirButton from "../libs/air-design/src/components/AirButton/AirButton";

const meta: Meta<typeof Modal> = {
  title: "Airbnb/Modal",
  component: Modal,
};

export default meta;

export const Default = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      <AirButton onClick={() => setIsOpen(true)}>Button</AirButton>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => undefined}
        actionLabel="Action Button"
      />
    </>
  );
};
