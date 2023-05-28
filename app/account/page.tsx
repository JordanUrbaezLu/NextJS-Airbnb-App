import Container from "../../components/Container";
import EmptyState from "../../components/EmptyState";
import Heading from "../../components/Heading";
import ThemeToggle from "../../components/ThemeToggle";
import { getCurrentUser } from "../../utils";
import UpdateImageForm from "./UpdateImageForm";

const AccountPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {currentUser ? (
        <>
          <Heading
            title={`Hello ${currentUser?.name}`}
            subtitle={
              currentUser?.membership
                ? `You are a ${currentUser.membership} Member`
                : ""
            }
          />
          <ThemeToggle />
          <UpdateImageForm />
        </>
      ) : (
        <EmptyState title="Unauthorized" subtitle="Please login" />
      )}
    </Container>
  );
};

export default AccountPage;
