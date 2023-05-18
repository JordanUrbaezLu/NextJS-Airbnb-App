import EmptyState from "../../app/components/EmptyState";
import ClientOnly from "../../app/components/ClientOnly";

import getCurrentUser from "../../app/actions/getCurrentUser";
import AccountClient from "./AccountClient";

const AccountPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <AccountClient currentUser={currentUser} />
    </ClientOnly>
  );
};

export default AccountPage;
