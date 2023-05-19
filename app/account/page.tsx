import EmptyState from "../../components/EmptyState";
import ClientOnly from "../../components/ClientOnly";
import getCurrentUser from "../../utils/getCurrentUser";
import Heading from "../../components/Heading";

const AccountPage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
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
    </ClientOnly>
  );
};

export default AccountPage;
