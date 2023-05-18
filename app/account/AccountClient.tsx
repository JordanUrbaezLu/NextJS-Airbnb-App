"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeUser } from "../types";

interface AccountClientProps {
  currentUser?: SafeUser | null;
}

const AccountClient: React.FC<AccountClientProps> = ({ currentUser }) => {
  return (
    <Container>
      <Heading
        title={`Hello ${currentUser?.name}`}
        subtitle={
          currentUser?.membership
            ? `You are a ${currentUser.membership} Member`
            : ""
        }
      />
    </Container>
  );
};

export default AccountClient;
