import Detail from "../../../components/Detail";
import EmptyState from "../../../components/EmptyState";
import { getCurrentUser } from "../../../utils";
import { getDate } from "../../../utils/getDate";

const DetailsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  return (
    <div>
      <div className="text-xl">Details</div>
      <Detail detail={currentUser.name} prefix="Name:" />
      <Detail detail={getDate(currentUser.createdAt)} prefix="Created:" />
      <Detail detail={currentUser.id} prefix="Account ID:" />
      <Detail
        detail={currentUser.membership ? currentUser.membership : "Regular"}
        prefix="Membership:"
      />
      <Detail detail={currentUser.email} prefix="Email:" />
      <Detail detail={getDate(currentUser.updatedAt)} prefix="Last Updated:" />
    </div>
  );
};

export default DetailsPage;
