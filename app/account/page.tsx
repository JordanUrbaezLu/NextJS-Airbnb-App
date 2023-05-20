import EmptyState from "../../components/EmptyState";
import getCurrentUser from "../../utils/getCurrentUser";
import Heading from "../../components/Heading";
import Container from "../../components/Container";

const AccountPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Container>
      {currentUser ? (
        <Heading
          title={`Hello ${currentUser?.name}`}
          subtitle={
            currentUser?.membership
              ? `You are a ${currentUser.membership} Member`
              : ""
          }
        />
      ) : (
        <EmptyState title="Unauthorized" subtitle="Please login" />
      )}
    </Container>
  );
};

export default AccountPage;
