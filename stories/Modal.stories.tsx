import type { Meta, StoryObj } from "@storybook/react";

import Modal from "../app/components/modals/Modal";
import Button from "../app/components/Button";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: "Airbnb/Modal",
  component: Modal,
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
